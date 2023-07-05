import { strict as assert } from "node:assert";
import * as fileAppender from "../ts/FileAppender";

const data =
  "This is a test.\nThis is is only a test.\nHad this been a real emergency, your computer would be melting in front of you.\n";
const filePath = "./file-appender-test-file.txt";

fileAppender.appendFileA(filePath, data, (results) => {
  if (results.status) {
    console.log(`Saved`);
  } else {
    console.log(results.reason);
  }
});
