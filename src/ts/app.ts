import askInput from "./ReadInput";
import checkPath from "./PathChecker";
import readFile from "./FileReader";

askInput("Give me a file or directory path")
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
  });
