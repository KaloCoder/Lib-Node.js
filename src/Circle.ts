export class Circle {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}
