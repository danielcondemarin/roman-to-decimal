import assert from 'assert';
import { DecimalGenerator } from '../lib/generator';

describe('Four Digits - Roman To Decimal Generator Tests', () => {
	let generator;

	beforeEach(() => {
		generator = new DecimalGenerator();
	});
	
	it('should return 1000 for roman numeral M', () => {
		assert.equal(generator.toDecimal('M'), 1000);
	});
});