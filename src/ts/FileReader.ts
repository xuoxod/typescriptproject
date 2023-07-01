import fs from "fs";

const { fsPromises } = fs.promises;

export const readFile = (filePath) => {
  return fs.promises
    .readFile(filePath, "utf8", "r")
    .then((results) => {
      return results;
    })
    .catch((err) => {
      return false;
      console.log(err);
    });
};

export default readFile;
