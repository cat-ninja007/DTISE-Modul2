export function angleOfTriangle(firstAngle: number, secondAngle: number):number{
    return 180-(firstAngle + secondAngle);
}

const result = angleOfTriangle(80, 65)
console.log(`The correct angle value is ${result}`)