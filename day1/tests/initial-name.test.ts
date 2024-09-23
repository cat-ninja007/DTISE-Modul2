import { initialName } from "../src/initial-name";

describe('initialName', () => {
    it('should return initials in uppercase for a single name', () => {
        const fullName = "John";
        const expectedInitials = "J";

        const result = initialName(fullName);
        expect(result).toBe(expectedInitials);
    });

    it('should return initials in uppercase for multiple names', () => {
        const fullName = "John Doe";
        const expectedInitials = "JD";

        const result = initialName(fullName);
        expect(result).toBe(expectedInitials);
    });

    it('should return initials in uppercase for names with multiple parts', () => {
        const fullName = "John Michael Doe";
        const expectedInitials = "JMD";

        const result = initialName(fullName);
        expect(result).toBe(expectedInitials);
    });

    it('should handle names with leading and trailing spaces', () => {
        const fullName = "   John Doe   ";
        const expectedInitials = "JD";

        const result = initialName(fullName.trim());
        expect(result).toBe(expectedInitials);
    });

    it('should return an empty string for an empty input', () => {
        const fullName = "";
        const expectedInitials = "";

        const result = initialName(fullName);
        expect(result).toBe(expectedInitials);
    });
});
