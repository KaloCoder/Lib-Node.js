import { Circle } from "./Geometry";
import { Rectangle } from "./Geometry";
import { Triangle } from "./Geometry";
import { ShapeManager } from "./Geometry";

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
const triangle = new Triangle(3, 8);

const shapeManager = new ShapeManager();
shapeManager.addShape(circle);
shapeManager.addShape(rectangle);
shapeManager.addShape(triangle);

const totalArea = shapeManager.getTotalArea();
console.log("Total area of all shapes: ", totalArea);
