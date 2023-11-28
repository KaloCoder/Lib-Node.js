import { Figure } from "./figure";

export class Triangle extends Figure {
  private base: number;
  private height: number;

  constructor(base: number, height: number) {
    super();
    this.base = base;
    this.height = height;
  }

  getArea(): number {
    return 0.5 * this.base * this.height;
  }
}
