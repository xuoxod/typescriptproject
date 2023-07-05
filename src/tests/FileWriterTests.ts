import assert from "assert";
import * as fileWriter from "../ts/FileWriter";

const log = console.log.bind(console);

const path: string = "./file-writer-test-file.txt";
const data: string = "File writer test";
let _status: boolean;

fileWriter.writeFileW(path, data, (results) => {
  const { status } = results;
  _status = status;
});

describe("fileWriterW method", () => {
  describe("status", () => {
    it("should equal true", () => {
      assert.equal(_status, true, "status is false");
    });
  });
});
