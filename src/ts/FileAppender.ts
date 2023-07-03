import fs from "fs";

export const appendFileA = (
  path: string = "./test.txt",
  data: string | string[],
  cb
): void => {
  fs.open(path, "a", (err, fd) => {
    if (err) {
      cb({ status: false });
      return console.error(err + "\n");
    }

    let buf = Buffer.from(data.toString()),
      pos = 0,
      offset = 0,
      len = buf.length;

    fs.write(fd, buf, offset, len, pos, (err, bytes, buff) => {
      if (err) {
        cb({ status: false });
        return console.error(err + "\n");
      } else {
        cb({ status: true });
      }
    });
  });
};
