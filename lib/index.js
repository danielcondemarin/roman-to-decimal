import { argv } from 'yargs';
import { DecimalGenerator } from './generator';

const generator = new DecimalGenerator();

const romanNumeral = generator.toDecimal(argv.number);

console.log(romanNumeral);