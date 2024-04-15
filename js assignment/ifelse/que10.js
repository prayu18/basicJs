// 10. Implement a program that determines the type of a triangle based on the lengths of its sides.
function typeOfTriangle(side1, side2, side3) {
    if (side1 === side2 && side2 === side3) {
        console.log("Equilateral triangle");
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        console.log("Isosceles triangle");
    } else {
        console.log("Scalene triangle");
    }
}
typeOfTriangle(5,4,2)