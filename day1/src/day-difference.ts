export function getDifferenceInDays(date1: string, date2: string): number {
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    // Calculate the time difference in milliseconds
    const diffInTime = d2.getTime() - d1.getTime();

    // Calculate the difference in days
    const diffInDays = diffInTime / (1000 * 3600 * 24);

    return diffInDays;
}

// Example usage:
const date1 = "2024-03-15";
const date2 = "2024-03-21";

const difference = getDifferenceInDays(date1, date2);
console.log(`Difference in days: ${difference}`); // Output: 2
