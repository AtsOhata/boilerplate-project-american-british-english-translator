const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
	test("Test 001: Mangoes are my favorite fruit.", function () {
		assert.equal(translator.toBritishEnglish("Mangoes are my favorite fruit."), "Mangoes are my <span class=\"highlight\">favourite</span> fruit.");
	});
	test("Test 002: I ate yogurt for breakfast.", function () {
		assert.equal(translator.toBritishEnglish("I ate yogurt for breakfast."), "I ate <span class=\"highlight\">yoghurt</span> for breakfast.");
	});
	test("Test 003: We had a party at my friend's condo.", function () {
		assert.equal(translator.toBritishEnglish("We had a party at my friend's condo."), "We had a party at my friend's <span class=\"highlight\">flat</span>.");
	});
	test("Test 004: Can you toss this in the trashcan for me?", function () {
		assert.equal(translator.toBritishEnglish("Can you toss this in the trashcan for me?"), "Can you toss this in the <span class=\"highlight\">bin</span> for me?");
	});
	test("Test 005: The parking lot was full.", function () {
		assert.equal(translator.toBritishEnglish("The parking lot was full."), "The <span class=\"highlight\">car park</span> was full.");
	});
	test("Test 006: Like a high tech Rube Goldberg machine.", function () {
		assert.equal(translator.toBritishEnglish("Like a high tech Rube Goldberg machine."), "Like a high tech <span class=\"highlight\">Heath Robinson device</span>.");
	});
	test("Test 007: To play hooky means to skip class or work.", function () {
		assert.equal(translator.toBritishEnglish("To play hooky means to skip class or work."), "To <span class=\"highlight\">bunk off</span> means to skip class or work.");
	});
	test("Test 008: No Mr. Bond, I expect you to die.", function () {
		assert.equal(translator.toBritishEnglish("No Mr. Bond, I expect you to die."), "No <span class=\"highlight\">Mr</span> Bond, I expect you to die.");
	});
	test("Test 009: Dr. Grosh will see you now.", function () {
		assert.equal(translator.toBritishEnglish("Dr. Grosh will see you now."), "<span class=\"highlight\">Dr</span> Grosh will see you now.");
	});
	test("Test 010: Lunch is at 12:15 today.", function () {
		assert.equal(translator.toBritishEnglish("Lunch is at 12:15 today."), "Lunch is at <span class=\"highlight\">12.15</span> today.");
	});
	test("Test 011: We watched the footie match for a while.", function () {
		assert.equal(translator.toAmericanEnglish("We watched the footie match for a while."), "We watched the <span class=\"highlight\">soccer</span> match for a while.");
	});
	test("Test 012: Paracetamol takes up to an hour to work.", function () {
		assert.equal(translator.toAmericanEnglish("Paracetamol takes up to an hour to work."), "<span class=\"highlight\">Tylenol</span> takes up to an hour to work.");
	});
	test("Test 013: First, caramelise the onions.", function () {
		assert.equal(translator.toAmericanEnglish("First, caramelise the onions."), "First, <span class=\"highlight\">caramelize</span> the onions.");
	});
	test("Test 014: I spent the bank holiday at the funfair.", function () {
		assert.equal(translator.toAmericanEnglish("I spent the bank holiday at the funfair."), "I spent the <span class=\"highlight\">public holiday</span> at the <span class=\"highlight\">carnival</span>.");
	});
	test("Test 015: I had a bicky then went to the chippy.", function () {
		assert.equal(translator.toAmericanEnglish("I had a bicky then went to the chippy."), "I had a <span class=\"highlight\">cookie</span> then went to the <span class=\"highlight\">fish-and-chip shop</span>.");
	});
	test("Test 016: I've just got bits and bobs in my bum bag.", function () {
		assert.equal(translator.toAmericanEnglish("I've just got bits and bobs in my bum bag."), "I've just got <span class=\"highlight\">odds and ends</span> in my <span class=\"highlight\">fanny pack</span>.");
	});
	test("Test 017: The car boot sale at Boxted Airfield was called off.", function () {
		assert.equal(translator.toAmericanEnglish("The car boot sale at Boxted Airfield was called off."), "The <span class=\"highlight\">swap meet</span> at Boxted Airfield was called off.");
	});
	test("Test 018: Have you met Mrs Kalyani?", function () {
		assert.equal(translator.toAmericanEnglish("Have you met Mrs Kalyani?"), "Have you met <span class=\"highlight\">Mrs.</span> Kalyani?");
	});
	test("Test 019: Prof Joyner of King's College, London.", function () {
		assert.equal(translator.toAmericanEnglish("Prof Joyner of King's College, London."), "<span class=\"highlight\">Prof.</span> Joyner of King's College, London.");
	});
	test("Test 020: Tea time is usually around 4 or 4.30.", function () {
		assert.equal(translator.toAmericanEnglish("Tea time is usually around 4 or 4.30."), "Tea time is usually around 4 or <span class=\"highlight\">4:30</span>.");
	});
	test("Test 021: Highlight translation in Mangoes are my favorite fruit.", function () {
		assert.equal(translator.toBritishEnglish("Mangoes are my favorite fruit."), "Mangoes are my <span class=\"highlight\">favourite</span> fruit.");
	});
	test("Test 022: Highlight translation in I ate yogurt for breakfast.", function () {
		assert.equal(translator.toBritishEnglish("I ate yogurt for breakfast."), "I ate <span class=\"highlight\">yoghurt</span> for breakfast.");
	});
	test("Test 023: Highlight translation in We watched the footie match for a while.", function () {
		assert.equal(translator.toAmericanEnglish("We watched the footie match for a while."), "We watched the <span class=\"highlight\">soccer</span> match for a while.");
	});
	test("Test 024: Highlight translation in Paracetamol takes up to an hour to work.", function () {
		assert.equal(translator.toAmericanEnglish("Paracetamol takes up to an hour to work."), "<span class=\"highlight\">Tylenol</span> takes up to an hour to work.");
	});
});
