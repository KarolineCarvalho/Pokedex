export const decimeterToMeter = (input: string | number) => {
  const string = input.toString();
  return string.length > 1
    ? string.replace(/(.)$/, "") + "," + string.at(-1) + "0"
    : "0," + string + "0";
};

export const decikilosToKilos = (input: string | number) => {
  const string = input.toString();
  return string.length > 1
    ? string.replace(/(.)$/, "") + "," + string.at(-1) + "0"
    : "0," + string + "0";
};
