import { describe, expect, test } from "@jest/globals";
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

describe("dummy test", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(1 + 2).toBe(3);
  });
});

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
