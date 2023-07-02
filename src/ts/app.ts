import askInput from "./ReadInput";
// import checkPath from "./PathChecker";
// import readFile from "./FileReader";
import { writeFile, writeFileW, writeFileX } from "./FileWriter";
import { appendFileA } from "./FileAppender";

const data =
  "This is a test.\nThis is is only a test.\nHad this been a real emergency, your computer would be melting in front of you.\n";
const filePath = "./test-file.txt";

appendFileA(filePath, data, (results) => {
  if (results.status) {
    console.log(`Saved`);
  } else {
    console.log(results.reason);
  }
});

/* askInput("Give me a file or directory path")
  .then((results) => {
    const { userInputData } = results;

    if (userInputData) {
      checkPath(userInputData, (results) => {
        if (results) {
          readFile(userInputData)
            .then((data) => {
              console.log(data);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.log(`Path ${userInputData} is unknown\n`);
        }
      });
    }
  })
  .catch((err) => {
    console.log(err);
  }); */
