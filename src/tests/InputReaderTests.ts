import * as inputReader from "../ts/InputReader";

inputReader
  .askInput("Give me a file or directory path")
  .then((results) => {
    const { userInputData } = results;

    if (userInputData) {
      console.log(`You entered [${userInputData}]`);
    } else {
      console.log(`Null or empty`);
    }
  })
  .catch((err) => {
    console.log(err);
  });
