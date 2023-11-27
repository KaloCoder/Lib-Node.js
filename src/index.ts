import { Triangle } from "./Geometry";
import { Circle } from "./Geometry";

const triangle = new Triangle(3, 4);
console.log("Triangle area:", triangle.getArea());

const circle = new Circle(5);
console.log("Circle area:", circle.getArea());
