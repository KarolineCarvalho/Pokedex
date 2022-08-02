export const captilizeFirstLetter = (string: string): string =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const clearString = (string: string): string =>
  string
    .replace(/[\r]/g, " ")
    .replace(/[\b]/g, " ")
    .replace(/[\f]/g, " ")
    .replace(/[\n]/g, " ")
    .replace(/\\/g, "")
    .replace(/é/g, "É")
    .replace(/[^\w\d\s\.,É]/g, "");
