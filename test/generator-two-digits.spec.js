import assert from 'assert';
import { DecimalGenerator } from '../lib/generator';

describe('Two Digits - Roman To Decimal Generator Tests', () => {
	let generator;

	beforeEach(() => {
		generator = new DecimalGenerator();
	});
	
	it('should return 10 for roman numeral X', () => {
		assert.equal(generator.toDecimal('X'), 10);
	});

	it('should return 12 for roman numeral XII', () => {
		assert.equal(generator.toDecimal('XII'), 12);
	});

	it('should return 14 for roman numeral XIV', () => {
		assert.equal(generator.toDecimal('XIV'), 14);
	});

	it('should return 19 for roman numeral XIX', () => {
		assert.equal(generator.toDecimal('XIX'), 19);
	});

	it('should return 40 for roman numeral XL', () => {
		assert.equal(generator.toDecimal('XL'), 40);
	});

	it('should return 41 for roman numeral XLI', () => {
		assert.equal(generator.toDecimal('XLI'), 41);
	});

	it('should return 50 for roman numeral L', () => {
		assert.equal(generator.toDecimal('L'), 50);
	});

	it('should return 90 for roman numeral XC', () => {
		assert.equal(generator.toDecimal('XC'), 90);
	});
});