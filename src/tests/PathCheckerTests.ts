import { strict as assert } from "node:assert";
import * as pathChecker from "../ts/PathChecker";

const log = console.log.bind(console);
const filePath = "./pathchecker-testfile.txt";
const invisibleFile = "./.file-pathchecker-testfile-visible1.txt";
const visibleFile = "./file-pathchecker-testfile-visible2.txt";
const readableFile = "./file-pathchecker-testfile-readable2.txt";
const unreadableFile = "./file-pathchecker-testfile-readable1.txt";
const writableFile = "./file-pathchecker-testfile-writable1.txt";
const unwritableFile = "./file-pathchecker-testfile-writable2.txt";
const executableFile = "./file-pathchecker-testfile-executable1";
const unexecutableFile = "./file-pathchecker-testfile-executable2";
const dirPath = "./pathchecker-testdir";

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

// readableFile
describe("PathChecker module", () => {
  let _status;

  pathChecker.readableFile(readableFile, (res) => {
    const { status } = res;
    _status = status;
  });

  describe("readableFile method", () => {
    describe("Returns callback object with status boolean property", () => {
      describe("Checking a readable file", () => {
        it("should equal true", () => {
          assert.equal(_status, true);
        });
      });
    });
  });
});
describe("PathChecker module", () => {
  let _status;

  pathChecker.readableFile(unreadableFile, (res) => {
    const { status } = res;
    _status = status;
  });

  describe("readableFile method", () => {
    describe("Returns callback object with status boolean property", () => {
      describe("Checking an unreadable file", () => {
        it("should equal false", () => {
          assert.equal(_status, false);
        });
      });
    });
  });
});
