import { Figure } from "./figure";

export class Circle extends Figure {
  private radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}
