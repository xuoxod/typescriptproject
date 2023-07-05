import * as inputReader from "../ts/InputReader";
import assert  from 'assert';


describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

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
