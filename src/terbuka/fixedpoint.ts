class FixedPoint {
  private _xi: number;
  public get xi(): number {
    return this._xi;
  }
  public set xi(value: number) {
    this._xi = value;
  }
  private _strategy: Strategy;
  public get strategy(): Strategy {
    return this._strategy;
  }
  public set strategy(value: Strategy) {
    this._strategy = value;
  }
  constructor(strategy: Strategy) {
    this._strategy = strategy;
    this._xi = 0;
  }

  public execute(): void {
    this.xi = this._strategy.calculate(this._xi);
  }
}

interface Strategy {
  calculate(x: number): number;
}

export class Strategy1 implements Strategy {
  calculate(x: number): number {
    // return Math.pow(x, 3) - Math.pow(x, 2) - x + 1;
    return Math.pow(x, 3) - Math.pow(x, 2) + 1;
  }
}

export class Strategy2 implements Strategy {
  calculate(x: number): number {
    return Math.sqrt(2 * x + 3);
  }
}

export default FixedPoint;
