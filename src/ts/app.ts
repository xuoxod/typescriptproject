import { open } from "node:fs/promises";

async function test(): Promise<void> {
  let file;
  try {
    file = await open("./test-file.txt", "r");
    const stat = await file.stat();

    console.log(`File Stat: ${JSON.stringify(stat)}`);
    // use stat
  } finally {
    await file.close();
  }
}

test();
