import * as checkPath from "../ts/PathChecker";

const filePath = "./test-file.txt";

checkPath.visibleFile(filePath, (res) => {
  const { status } = res;

  console.log(`\n\n\t\t\tStatus:\t${status}\n\n\n`);
});

checkPath.stats(filePath, (res) => {
  const { stats } = res;

  if (stats) {
    console.log(`${JSON.stringify(stats)}`);

    console.log(`${JSON.stringify(stats.mode)}`);
  }
});
