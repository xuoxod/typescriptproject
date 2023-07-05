import fs from "node:fs";
import { open } from "node:fs/promises";

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
    // cb({ status: false, error: err });
    const error = new TypeError(`file not found`);
    error.message = `file not found`;

    throw error;
    // return console.log(err);
  }
};

export default readFile;
