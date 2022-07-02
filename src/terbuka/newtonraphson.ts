import { calculateWithFormula, firstDerivativeOfFormula } from "../formula";

class NewtonRaphson {
  private _xr: number;
  public get xr(): number {
    return this._xr;
  }
  public set xr(value: number) {
    this._xr = value;
  }
  constructor(xr: number) {
    this._xr = xr;
  }
  public calculate() {
    this._xr =
      this._xr -
      calculateWithFormula(this._xr) / firstDerivativeOfFormula(this._xr);
  }
}

export default NewtonRaphson;
