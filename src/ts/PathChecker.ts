import { stat } from "node:fs";
import { access, constants } from "node:fs/promises";
import * as fsConstants from "./Constants";

export const isDirectory = (path: string = "", cb): void => {
  stat(path, (err, stats) => {
    if (err) throw err;
    cb({ isDirectory: stats.isDirectory() });
  });
};

export const isFile = (path: string = "", cb): void => {
  stat(path, (err, stats) => {
    if (err) throw err;
    cb({ isFile: stats.isFile() });
  });
};

export const stats = (path: string = "", cb): void => {
  stat(path, (err, stats) => {
    if (err) throw err;
    cb({ stats });
  });
};

export const visibleFile = async (path: string, cb): Promise<void> => {
  try {
    const results = await access(path, fsConstants.F_OK);
    cb({ status: true });
  } catch (err) {
    cb({ status: false });
  }
};

export const readableFile = async (path: string, cb): Promise<void> => {
  try {
    const results = await access(path, fsConstants.R_OK);
    cb({ status: true });
  } catch (err) {
    cb({ status: false });
  }
};

export const writableFile = async (path: string, cb): Promise<void> => {
  try {
    const results = await access(path, fsConstants.W_OK);
    cb({ status: true });
  } catch (err) {
    cb({ status: false });
  }
};

export const executableFile = async (path: string, cb): Promise<void> => {
  try {
    const results = await access(path, fsConstants.X_OK);
    cb({ status: true });
  } catch (err) {
    cb({ status: false });
  }
};

/**
 * 
  ---------------------------------------------->
  
  import { access, constants } from 'node:fs/promises';

try {
  await access('/etc/passwd', constants.R_OK | constants.W_OK);
  console.log('can access');
} catch {
  console.error('cannot access');
}

 */
