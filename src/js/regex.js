const letters = /[a-zA-Z]+/g;
const integers = /[0-9]+/g;
// const decimals = /([0-9]+(\.[0-9]+){1}|(\.[0-9]+))/g;
const decimals = / ^ ( \.| [ 0 - 9 ] +\.[ 0 - 9 ] +| [ 0 - 9 ] +) /gm;
const alphanum = /[0-9a-zA-Z]+/g;

export const lettersOnly = (arg = "") => letters.test(arg);

export const integersOnly = (arg = "") => integers.test(arg);

export const decimalsOnly = (arg = "") => decimals.test(arg);

export const alphanumeric = (arg = "") => alphanum.test(arg);
