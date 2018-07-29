export const average = numbers => numbers.reduce((a, v) => a + v, 0) / numbers.length;

export const round = (num, places) => {
  const multiplier = 10 ** places;
  return Math.round(num * multiplier) / multiplier;
};

export const kelvinToCelcius = kelvin => kelvin - 273.15;
