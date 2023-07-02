import fs from "fs";

export const writeFile = (
  path: string = "./test.txt",
  data: string = "new file data",
  cb
): void => {
  fs.writeFile(`${path}`, data, (err) => {
    if (err) {
      console.log(err);
      cb({ status: false });
    }
    cb({ status: true });
  });
};

export const writeFileW = (
  path: string = "./test.txt",
  data: string | string[],
  cb
): void => {
  fs.open(path, "w+", (err, fd) => {
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

export const writeFileX = (
  path: string = "./test.txt",
  data: string | string[],
  cb
): void => {
  fs.open(path, "wx", (err, fd) => {
    if (err) {
      cb({ status: false, reason: err });
      return console.error(err + "\n");
    }

    let buf = Buffer.from(data.toString()),
      pos = 0,
      offset = 0,
      len = buf.length;

    fs.write(fd, buf, offset, len, pos, (err, bytes, buff) => {
      if (err) {
        cb({ status: false, reason: err });
        return console.error(err + "\n");
      } else {
        cb({ status: true });
      }
    });
  });
};
