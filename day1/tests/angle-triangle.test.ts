import { angleOfTriangle } from "../src/angle-triangle";

describe('Find The Missing Angle', () => { 
    it('should return the correct angle that is missing in triangle', () => {
        const angle1 = 80;
        const angle2 = 65;
        const expectedAngle = 35;
        
        const result = angleOfTriangle(angle1, angle2);
        expect(result).toBe(expectedAngle);
    });
 })