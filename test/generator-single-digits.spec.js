import assert from 'assert';
import { DecimalGenerator } from '../lib/generator';

describe('Single Digits - Roman To Decimal Generator Tests', () => {
	let generator;

	beforeEach(() => {
		generator = new DecimalGenerator();
	});
	
	it('should return 1 for roman numeral I', () => {
		assert.equal(generator.toDecimal('I'), 1);
	});

	it('should return 2 for roman numeral II', () => {
		assert.equal(generator.toDecimal('II'), 2);
	});

	it('should return 3 for roman numeral III', () => {
		assert.equal(generator.toDecimal('III'), 3);
	});

	it('should return 4 for roman numeral IV', () => {
		assert.equal(generator.toDecimal('IV'), 4);
	});

	it('should return 5 for roman numeral V', () => {
		assert.equal(generator.toDecimal('V'), 5);
	});

	it('should return 8 for roman numeral VIII', () => {
		assert.equal(generator.toDecimal('VIII'), 8);
	});

	it('should return 9 for roman numeral IX', () => {
		assert.equal(generator.toDecimal('IX'), 9);
	});
});