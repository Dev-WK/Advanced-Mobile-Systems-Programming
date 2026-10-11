
export function sum(...values: unknown[]): number {
    const validNumbers: number[] = [];

    values.forEach((value, index) => {
        if (typeof value === 'number' && Number.isFinite(value)) {
            validNumbers.push(value);
        } else {
            // JSON.stringify różnicuje np. 5 i "5", a String() ratuje sytuację dla NaN/undefined[cite: 10]
            const displayValue = (Number.isNaN(value) || value === undefined) ? String(value) : JSON.stringify(value);
            console.log(`Argument ${index + 1} is not a number: ${displayValue}`);
        }
    });

    return validNumbers.reduce((acc, curr) => acc + curr, 0);
}