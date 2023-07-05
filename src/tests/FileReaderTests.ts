import assert from "assert";
import * as fileReader from "../ts/FileReader";

const log = console.log.bind(console);

const filePath = "./file-reader-test-file.txt";
const filePathError = "./test-files.txt";
const filePathData = `This is a test.
This is is only a test.
Had this been a real emergency, your computer would be melting in front of you.`;

let _status, _content, _error;

fileReader.readFileR(filePath, (res) => {
  const { status, content, error } = res;
  _status = status;
  _content = content;
});

describe("fileReaderR method return data", () => {
  describe("status", () => {
    it("should equal true", () => {
      assert.equal(_status, true, "status is false");
    });
  });

  describe("content", () => {
    it("should equal filePathData", () => {
      assert.equal(
        _content.trim(),
        filePathData.trim(),
        "filePathData does not match"
      );
    });
  });
});
