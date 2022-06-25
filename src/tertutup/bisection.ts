import { calculateWithFormula } from "../formula";

class Bisection {
  private _a: number;
  public get a(): number {
    return this._a;
  }
  public set a(value: number) {
    this._a = value;
  }
  private _b: number;
  public get b(): number {
    return this._b;
  }
  public set b(value: number) {
    this._b = value;
  }
  private _c: number;
  public get c(): number {
    return this._c;
  }
  public set c(value: number) {
    this._c = value;
  }
  private _fa: number;
  public get fa(): number {
    return this._fa;
  }
  public set fa(value: number) {
    this._fa = value;
  }
  private _fb: number;
  public get fb(): number {
    return this._fb;
  }
  public set fb(value: number) {
    this._fb = value;
  }
  private _fc: number;
  public get fc(): number {
    return this._fc;
  }
  public set fc(value: number) {
    this._fc = value;
  }
  private _fac: number;
  public get fac(): number {
    return this._fac;
  }
  public set fac(value: number) {
    this._fac = value;
  }
  constructor(a: number, b: number) {
    this._a = a;
    this._b = b;
    this._c = (a + b) / 2;
    this._fa = calculateWithFormula(a);
    this._fb = calculateWithFormula(b);
    this._fc = calculateWithFormula(this._c);
    this._fac = this._fa * this._fc;
  }
}

export default Bisection;
