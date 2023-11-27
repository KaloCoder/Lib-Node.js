export class Triangle {
  private base: number;
  private height: number;

  constructor(base: number, height: number) {
    this.base = base;
    this.height = height;
  }

  getArea(): number {
    return 0.5 * this.base * this.height;
  }
}
