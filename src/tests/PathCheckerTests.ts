import { strict as assert } from "node:assert";
import * as pathChecker from "../ts/PathChecker";

const log = console.log.bind(console);
const filePath = "./path-checker-test-file.txt";
const invisibleFile = "./file-path-checker-test-file-visible1.txt";
const visibleFile = "./file-path-checker-test-file-visible2.txt";
const dirPath = "./path-checker-test-dir";

// isDirectory
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

// isFile
describe("PathChecker module", () => {
  let _isFile;

  pathChecker.isFile(filePath, (res) => {
    const { isFile } = res;
    _isFile = isFile;
  });

  describe("isFile method", () => {
    describe("Returns callback object with isFile boolean property", () => {
      describe("Checking a regular file", () => {
        it("should equal true", () => {
          assert.equal(_isFile, true);
        });
      });
    });
  });
});

describe("PathChecker module", () => {
  let _isFile;

  pathChecker.isFile(dirPath, (res) => {
    const { isFile } = res;
    _isFile = isFile;
  });

  describe("isFile method", () => {
    describe("Returns callback object with isFile boolean property", () => {
      describe("Checking a directory", () => {
        it("should equal false", () => {
          assert.equal(_isFile, false);
        });
      });
    });
  });
});

// visibleFile
describe("PathChecker module", () => {
  let _status;

  pathChecker.visibleFile(visibleFile, (res) => {
    const { status } = res;
    _status = status;
  });

  describe("visibleFile method", () => {
    describe("Returns callback object with status boolean property", () => {
      describe("Checking a visible file", () => {
        it("should equal true", () => {
          assert.equal(_status, true);
        });
      });
    });
  });
});

describe("PathChecker module", () => {
  let _status;

  pathChecker.visibleFile(invisibleFile, (res) => {
    const { status } = res;
    _status = status;
  });

  describe("visibleFile method", () => {
    describe("Returns callback object with status boolean property", () => {
      describe("Checking an invisible file", () => {
        it("should equal false", () => {
          assert.equal(_status, false);
        });
      });
    });
  });
});
