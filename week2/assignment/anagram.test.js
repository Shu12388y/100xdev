const anagram = require("./anagram")

describe('anagram', () => {
	test('returns true for anagrams', () => {
		expect(anagram('listen', 'silent')).toBe(true);
		expect(anagram('rail safety', 'fairy tales')).toBe(
			true
		);
		expect(anagram('openai', 'aiopen')).toBe(true);
		expect(anagram('', '')).toBe(true);
	});

	test('returns false for non-anagrams', () => {
		expect(anagram('hello', 'world')).toBe(false);
		expect(anagram('openai', 'open')).toBe(false);
		expect(anagram('hello', 'lhel')).toBe(false);
		expect(anagram('working', 'non')).toBe(false);
	});

	test('returns true for anagrams with different casing', () => {
		expect(anagram('Debit Card', 'Bad Credit')).toBe(
			true
		);
		expect(
			anagram('School MASTER', 'The ClassROOM')
		).toBe(true);
	});

	test('returns true for anagrams with special characters', () => {
		expect(anagram('abc!', '!bac')).toBe(true);
	});

	test('returns false for non-anagrams with special characters', () => {
		expect(anagram('hello', 'hello!')).toBe(false);
		expect(anagram('openai!', 'open')).toBe(false);
	});
});