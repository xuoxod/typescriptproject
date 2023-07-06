import { describe, expect, test } from "@jest/globals";
import * as pathChecker from "../ts/PathChecker";

const log = console.log.bind(console);
const filePath = "./pathchecker-testfile.txt";
const invisibleFile = "./.file-pathchecker-testfile-visible1.txt";
const visibleFile = "./file-pathchecker-testfile-visible2.txt";
const readableFile = "./file-pathchecker-testfile-readable2.txt";
const unreadableFile = "./file-pathchecker-testfile-readable1.txt";
const writableFile = "./file-pathchecker-testfile-writable2.txt";
const unwritableFile = "./file-pathchecker-testfile-writable1.txt";
const executableFile = "./file-pathchecker-testfile-executable1";
const unexecutableFile = "./file-pathchecker-testfile-executable2";
const dirPath = "./pathchecker-testdir";

describe("dummy test", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(1 + 2).toBe(3);
  });
});

// pathChecker.isDirectory
describe("PathChecker module", () => {
  describe("isDirectory method", () => {
    describe("checking a regular file", () => {
      test("is path a directory", () => {
        pathChecker.isDirectory(filePath, (results) => {
          const { isDirectory } = results;
          expect(isDirectory).toBeFalsy();
        });
      });
    });
  });
});

describe("PathChecker module", () => {
  describe("isDirectory method", () => {
    describe("checking a directory", () => {
      test("is path a directory", () => {
        pathChecker.isDirectory(dirPath, (results) => {
          const { isDirectory } = results;
          expect(isDirectory).toBeTruthy();
        });
      });
    });
  });
});

// pathChecker.isFile
describe("PathChecker module", () => {
  describe("isFile method", () => {
    describe("checking a directory path", () => {
      test("is path a file", () => {
        pathChecker.isFile(dirPath, (results) => {
          const { isFile } = results;
          expect(isFile).toBeFalsy();
        });
      });
    });
  });
});

describe("PathChecker module", () => {
  describe("isFile method", () => {
    describe("checking a file path", () => {
      test("is path a file", () => {
        pathChecker.isFile(filePath, (results) => {
          const { isFile } = results;
          expect(isFile).toBeTruthy();
        });
      });
    });
  });
});

// pathChecker.visibleFile
describe("PathChecker module", () => {
  describe("visibleFile method", () => {
    describe("checking invisible file", () => {
      test("is file visible", () => {
        pathChecker.visibleFile(invisibleFile, (results) => {
          const { status } = results;
          expect(status).toBeFalsy();
        });
      });
    });
  });
});

describe("PathChecker module", () => {
  describe("visibleFile method", () => {
    describe("checking visible file", () => {
      test("is file visible", () => {
        pathChecker.visibleFile(visibleFile, (results) => {
          const { status } = results;
          expect(status).toBeTruthy();
        });
      });
    });
  });
});

// pathChecker.readableFile
describe("PathChecker module", () => {
  describe("readableFile method", () => {
    describe("checking unreadable file", () => {
      test("is file readable", () => {
        pathChecker.readableFile(unreadableFile, (results) => {
          const { status } = results;
          expect(status).toBeFalsy();
        });
      });
    });
  });
});

describe("PathChecker module", () => {
  describe("readableFile method", () => {
    describe("checking readable file", () => {
      test("is file readable", () => {
        pathChecker.readableFile(readableFile, (results) => {
          const { status } = results;
          expect(status).toBeTruthy();
        });
      });
    });
  });
});

// pathChecker.writableFile
describe("PathChecker module", () => {
  describe("writableFile method", () => {
    describe("checking unwritable file", () => {
      test("is file writable", () => {
        pathChecker.writableFile(unwritableFile, (results) => {
          const { status } = results;
          expect(status).toBeFalsy();
        });
      });
    });
  });
});

describe("PathChecker module", () => {
  describe("writableFile method", () => {
    describe("checking writable file", () => {
      test("is file writable", () => {
        pathChecker.writableFile(writableFile, (results) => {
          const { status } = results;
          log(status);
          expect(status).toBeTruthy();
        });
      });
    });
  });
});
