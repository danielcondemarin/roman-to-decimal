import assert from 'assert';
import { DecimalGenerator } from '../lib/generator';

describe('Invalid Input - Roman To Decimal Generator Tests', () => {
	let generator;

	beforeEach(() => {
		generator = new DecimalGenerator();
	});

	it('should throw if invalid roman numeral found', () => {
		assert.throws(() => {
			generator.toDecimal('A')
		}, /Unrecognized Roman Numeral/);
	});

	it('should throw if input is not a valid string', () => {
		assert.throws(() => {
			generator.toDecimal(undefined);
		}, /Invalid Input/);
	});
});