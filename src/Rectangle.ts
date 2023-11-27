export interface RectangleOptions {
  width: number;
  height: number;
}

export class Rectangle {
  private width: number;
  private height: number;

  constructor(options: RectangleOptions) {
    this.width = options.width;
    this.height = options.height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}
