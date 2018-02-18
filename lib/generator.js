import symbols from '../data/symbols.json';
import { findFirstRomanPart } from './roman-part-finder';

export class DecimalGenerator {
	constructor() {
		this.accumulator = 0;
	}

	toDecimal(romanNumeral) {
		if (typeof romanNumeral !== "string" || !(romanNumeral.length > 0) ) {
			throw new Error('Invalid Input');
		}

		return this._toDecimalRecurse(romanNumeral);
	}

	_toDecimalRecurse(romanNumeral) {
		const currentNumeralValue = symbols[romanNumeral];
		
		if(currentNumeralValue) {
			this.accumulator += currentNumeralValue;
			return this.accumulator;
		}
	
		const part = findFirstRomanPart(romanNumeral);
		const partValue = symbols[part];
		const remainder = romanNumeral.substring(part.length, romanNumeral.length);

		this.accumulator += partValue;
	
		return this._toDecimalRecurse(remainder);
	}
}
