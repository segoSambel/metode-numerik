export function calculateWithFormula(x: number): number {
  return Math.pow(x, 3) - Math.pow(x, 2) - x + 1;
}

export function setPrecision(x: any, precision: number = 7): string {
  return Number(x)
    .toFixed(precision)
    .replace(/\.?0*$/, "");
}
