
import filter from 'lodash/filter.js';
import reduce from 'lodash/reduce.js';

export class Calculator {
    private readonly values: number[];
    private readonly rejected: unknown[];

    constructor(input: unknown[]) {
        // _.filter z biblioteki Lodash zamiast wbudowanej metody tablicowej
        this.values = filter(input, (value) => typeof value === 'number' && Number.isFinite(value)) as number[];
        this.rejected = filter(input, (value) => !(typeof value === 'number' && Number.isFinite(value)));

        this.rejected.forEach((value, index) => {
            const displayValue = (Number.isNaN(value) || value === undefined) ? String(value) : JSON.stringify(value);
            console.log(`Rejected element: ${displayValue}`);
        });
    }

    add(): number {
        // _.reduce z biblioteki Lodash
        return reduce(this.values, (acc, curr) => acc + curr, 0);
    }

    subtract(): number {
        if (this.values.length === 0) return 0;
        // Użycie ?? 0 wymusza na kompilatorze typ 'number' zamiast 'number | undefined'
        return reduce(this.values.slice(1), (acc, curr) => acc - curr, this.values[0] ?? 0);
    }

    multiply(): number {
        if (this.values.length === 0) return 0;
        return reduce(this.values, (acc, curr) => acc * curr, 1);
    }

    divide(): number {
        if (this.values.length === 0) return 0;
        return reduce(this.values.slice(1), (acc, curr) => {
            if (curr === 0) {
                console.log("Warning: Division by zero encountered. Ignoring zero.");
                return acc;
            }
            return acc / curr;
        }, this.values[0] ?? 0);
    }

    min(): number {
        if (this.values.length === 0) return 0;
        return Math.min(...this.values);
    }

    max(): number {
        if (this.values.length === 0) return 0;
        return Math.max(...this.values);
    }

    average(): number {
        if (this.values.length === 0) return 0;
        return this.add() / this.values.length;
    }

}