import { areaOfRectangle } from "../src/area-rectangle";

describe('Calculate the Area of Rectangle', () => {
    it('should calculate the area of rectangle when the value of length and width are positive', () => {
        const width = 5;
        const height = 3;
        const expectedResult = 15;

        const result = areaOfRectangle(width, height);
        expect(result).toBe(expectedResult)
        
    });
 })