export function sum(...values: number[]): number {
    return values.reduce((acc, curr) => acc + curr, 0);
}