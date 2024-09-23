import { areaOfCircle, diameterOfCircle, circumferenceOfCircle } from "../src/area-circle";

describe('Circle Calculations', () => {
    it('should return the area of the circle with a proper radius value', () => {
        const radius = 5;
        const expectedArea = 78.5;

        const result = areaOfCircle(radius);
        expect(result).toBe(expectedArea);
    });

    it('should return the diameter of the circle with a proper radius value', () => {
        const radius = 5;
        const expectedDiameter = 10;

        const result = diameterOfCircle(radius);
        expect(result).toBe(expectedDiameter);
    });

    it('should return the circumference of the circle with a proper radius value', () => {
        const radius = 5;
        const expectedCircumference = 31.4;

        const result = circumferenceOfCircle(radius);
        expect(result).toBeCloseTo(expectedCircumference, 2); // Use toBeCloseTo to handle floating-point precision
    });
});
