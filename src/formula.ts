export function calculateWithFormula(x: number): number {
  return Math.pow(x, 3) - Math.pow(x, 2) - x + 1;
}

export function firstDerivativeOfFormula(x: number) {
  return 3 * Math.pow(x, 2) - 2 * x - 1;
}

// THIS FUNCTION IS USED TO SET PRECISION OF FLOATING POINT NUMBER
export function setPrecision(x: any, precision: number = 14): string {
  return Number(x)
    .toFixed(precision)
    .replace(/\.?0*$/, "");
}

export function getRandom() {
  return Math.floor(Math.random() * 10) + 1;
}

export function getRandomZeroFloat() {
  return parseFloat(Math.random().toFixed(2));
}
