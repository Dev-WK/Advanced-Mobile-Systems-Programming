
import { Calculator } from './calculator.ts';

const calc = new Calculator([2, 'seven', 4, null, 8]);
console.log(calc.add()); // Zwróci 14
console.log(calc.multiply()); // Zwróci 64