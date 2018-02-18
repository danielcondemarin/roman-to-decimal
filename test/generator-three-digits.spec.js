import assert from 'assert';
import { DecimalGenerator } from '../lib/generator';

describe('Two Digits - Roman To Decimal Generator Tests', () => {
	let generator;

	beforeEach(() => {
		generator = new DecimalGenerator();
	});
	
	it('should return 100 for roman numeral C', () => {
		assert.equal(generator.toDecimal('C'), 100);
	});

	it('should return 400 for roman numeral CD', () => {
		assert.equal(generator.toDecimal('CD'), 400);
	});

	it('should return 500 for roman numeral D', () => {
		assert.equal(generator.toDecimal('D'), 500);
	});

	it('should return 900 for roman numeral CM', () => {
		assert.equal(generator.toDecimal('CM'), 900);
	});
});