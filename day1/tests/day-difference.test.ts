import { getDifferenceInDays } from "../src/day-difference";

describe('getDifferenceInDays', () => { 
    it('should return the correct difference in days for valid dates', () => {
        const date1 = "2024-03-19";
        const date2 = "2024-03-21";
        const expectedDifference = 2;

        const result = getDifferenceInDays(date1, date2);
        expect(result).toBe(expectedDifference)
    })
 })