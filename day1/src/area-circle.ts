const phi = 3.14;
export function areaOfCircle(radius: number): number {
    return phi * radius * radius;
}

export function diameterOfCircle(radius: number): number {
    return radius * 2;
}

export function circumferenceOfCircle(radius: number): number {
    return 2 * phi * radius;
}


const radius = 5;
const area = areaOfCircle(radius);
const diameter = diameterOfCircle(radius);
const circumference = circumferenceOfCircle(radius);

console.log(`The area of the circle is ${area}`);
console.log(`The diameter of the circle is ${diameter}`);
console.log(`The circumference of the circle is ${circumference}`);
