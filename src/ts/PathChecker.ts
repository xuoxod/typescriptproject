import { exists } from "node:fs";
import fs from "fs";

export const checkPath = (path: string = "", cb): void => {
  exists(`${path}`, (e) => {
    cb(e);
  });
};

export const checkPathExists = (path: string = "", cb): void => {
  fs.stat(path, (err, stats) => {
    if (err) throw err;

    cb(stats.isFile());
  });
};

export default checkPath;
