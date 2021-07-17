export const uniqueId = (length = 16) => {
  return parseInt(
    Math.ceil(Math.random() * Date.now())
      .toPrecision(length)
      .toString()
      .replace('.', '')
  );
};

export const greaterOf = (num1: number, num2: number) => {
  if (num1 > num2) {
    return num1;
  }
  return num2;
}

export const lesserOf = (num1: number, num2: number) => {
  if (num1 < num2) {
    return num1;
  }
  return num2;
};
