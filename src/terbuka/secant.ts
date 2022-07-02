import { calculateWithFormula } from "../formula";

class Secant {
  private _xr: number;
  public get xr(): number {
    return this._xr;
  }
  public set xr(value: number) {
    this._xr = value;
  }
  constructor(xr: number = 0) {
    this._xr = xr;
  }

  public calculate(xr2: number, xr1: number) {
    this._xr =
      xr1 -
      (calculateWithFormula(xr1) * (xr1 - xr2)) /
        (calculateWithFormula(xr1) - calculateWithFormula(xr2));
  }
}

export default Secant;
