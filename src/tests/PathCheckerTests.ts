import { strict as assert } from "node:assert";
import * as pathChecker from "../ts/PathChecker";

const filePath = "./path-checker-test-file.txt";
const dirPath = "./path-checker-test-dir";

let _status;
let _isFile;

describe("PathChecker module", () => {
  let _isDirectory;

  pathChecker.isDirectory(filePath, (res) => {
    const { isDirectory } = res;
    _isDirectory = isDirectory;
  });

  describe("isDirectory method", () => {
    describe("Returns callback object with isDirectory boolean property", () => {
      describe("Checking a regular file", () => {
        it("should equal false", () => {
          assert.equal(_isDirectory, false);
        });
      });
    });
  });
});

describe("PathChecker module", () => {
  let _isDirectory;

  pathChecker.isDirectory(dirPath, (res) => {
    const { isDirectory } = res;
    _isDirectory = isDirectory;
  });

  describe("isDirectory method", () => {
    describe("Returns callback object with isDirectory boolean property", () => {
      describe("Checking a directory", () => {
        it("should equal true", () => {
          assert.equal(_isDirectory, true);
        });
      });
    });
  });
});
