import * as fileReader from "../ts/FileReader";

const filePath = "./test-file.txt";

fileReader.readFileR(filePath, (res) => {
  const { status, content, error } = res;

  if (status) {
    console.log(content);
  } else {
    console.log(error);
  }
});
