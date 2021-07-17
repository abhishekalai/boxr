export const randomColor = () =>
  Math.floor(Math.random() * 16777215).toString(16);

export const randomIntFromInterval = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);
