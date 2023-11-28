import { Figure } from "./figure";

export class ShapeManager {
  private shapes: Figure[];

  constructor() {
    this.shapes = [];
  }

  addShape(shape: Figure): void {
    this.shapes.push(shape);
  }

  getTotalArea(): number {
    let totalArea = 0;
    for (const shape of this.shapes) {
      totalArea += shape.getArea();
    }
    return totalArea;
  }
}
