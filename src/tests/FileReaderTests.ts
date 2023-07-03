import test from "ava";
import * as fileReader from "../ts/FileReader";

const filePath = "./test-file.txt";

test("foo", (t) => {
  t.pass();
});

fileReader.readFileR(filePath, (res) => {
  const { status, content, error } = res;

  if (status) {
    console.log(content);
  } else {
    console.log(error);
  }
});
