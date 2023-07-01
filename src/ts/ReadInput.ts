import * as readline from "node:readline/promises";
import { open, read, write } from "node:fs/promises";
import { stdin as input, stdout as output } from "node:process";

export const askInput = async (
  question: string = "What do you think of Node.js? "
) => {
  try {
    const rl = readline.createInterface({ input, output });
    const answer = await rl.question(`${question}\n`);
    rl.close();

    if (answer) {
      return Promise.resolve({ userInputData: answer });
    } else {
      return Promise.reject({
        userInputErrorReason: `User input response was null or empty`,
      });
    }
  } catch (err) {
    return Promise.reject({
      askInputErrorreason: `Unknown error occured`,
      askInputError: err,
    });
  }
};

export default askInput;
