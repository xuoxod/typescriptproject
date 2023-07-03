import test from "ava";
import fs from "node:fs";
import { open } from "node:fs/promises";

test("foo", (t) => {
  t.pass();
});

export const readFile = (filePath) => {
  return fs.promises
    .readFile(filePath, "utf8")
    .then((results) => {
      return results;
    })
    .catch((err) => {
      return false;
      console.log(err);
    });
};

export const readFileR = (filePath, cb) => {
  try {
    const readableStream = fs.createReadStream(filePath);
    const chunks: string[] = [];

    readableStream.on("readable", () => {
      let chunk: string;

      while (null !== (chunk = readableStream.read())) {
        chunks.push(chunk);
      }
    });

    readableStream.on("end", () => {
      const content = chunks.join("");
      cb({ status: true, content });
    });
  } catch (err) {
    cb({ status: false, error: err });
    return console.log(err);
  }
};

export default readFile;
