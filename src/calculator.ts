export class Calculator {
    private readonly values: number[];
    private readonly rejected: unknown[];

    constructor(input: unknown[]) {
        this.values = [];
        this.rejected = [];

        input.forEach((value, index) => {
            if (typeof value === 'number' && Number.isFinite(value)) {
                this.values.push(value);
            } else {
                this.rejected.push(value);
                const displayValue = (Number.isNaN(value) || value === undefined) ? String(value) : JSON.stringify(value);
                console.log(`Argument ${index + 1} is rejected: ${displayValue}`);
            }
        });
    }

    add(): number {
        return this.values.reduce((acc, curr) => acc + curr, 0);
    }

    subtract(): number {
        if (this.values.length === 0) return 0;
        return this.values.slice(1).reduce((acc, curr) => acc - curr, this.values[0]);
    }

    multiply(): number {
        if (this.values.length === 0) return 0;
        return this.values.reduce((acc, curr) => acc * curr, 1);
    }

    divide(): number {
        if (this.values.length === 0) return 0;
        return this.values.slice(1).reduce((acc, curr) => {
            if (curr === 0) {
                console.log("Warning: Division by zero encountered. Ignoring zero.");
                return acc; // Zabezpieczenie przed zwarciem do Infinity/NaN
            }
            return acc / curr;
        }, this.values[0]);
    }
}