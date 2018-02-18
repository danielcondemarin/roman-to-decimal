import symbols from '../data/symbols.json';
const GREATEST_SYMBOL_LENGTH = 2;

export function findFirstRomanPart(romanNumeral) {
	for (let i = GREATEST_SYMBOL_LENGTH; i >= 0; i--) {
		const part = romanNumeral.substring(0, i);
		const partValue = symbols[part];

		if (partValue) {
			return part;
		}
	}

	throw new Error('Unrecognized Roman Numeral: ' + romanNumeral);
}