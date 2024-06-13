const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
	toAmericanEnglish(text) {
		Object.entries(americanToBritishTitles).forEach(([key, value]) => {
			text = this.replaceWordIgnoringPeriod(text, value, key);
		});
		Object.entries(americanToBritishSpelling).forEach(([key, value]) => {
			text = this.replaceWord(text, value, key);
		});
		Object.entries(britishOnly).forEach(([key, value]) => {
			text = this.replaceWord(text, key, value);
		});
		text = this.convertTimeToBritish(text);
		return text;
	}

	toBritishEnglish(text) {
		Object.entries(americanToBritishTitles).forEach(([key, value]) => {
			text = this.replaceWordIgnoringPeriod(text, key, value);
		});
		Object.entries(americanToBritishSpelling).forEach(([key, value]) => {
			text = this.replaceWord(text, key, value);
		});
		Object.entries(americanOnly).forEach(([key, value]) => {
			text = this.replaceWord(text, key, value);
		});
		text = this.convertTimeToAmerican(text);
		return text;
	}

	replaceWord(text, word, replacement) {
		const regex = new RegExp(`(^|\\s)(${word})([\\s.,!?;:]|$)`, 'gi');
		return text.replace(regex, (match, p1, p2, p3) => {
			const replacedWord = p2[0] === p2[0].toUpperCase()
				? replacement.charAt(0).toUpperCase() + replacement.slice(1)
				: replacement.toLowerCase();
			return p1 + '<span class="highlight">' + replacedWord + "</span>" + p3;
		});
	}

	replaceWordIgnoringPeriod(text, word, replacement) {
		const regex = new RegExp(`(^|\\s)(${word})([\\s,!?;:]|$)`, 'gi');
		return text.replace(regex, (match, p1, p2, p3) => {
			const replacedWord = p2[0] === p2[0].toUpperCase()
				? replacement.charAt(0).toUpperCase() + replacement.slice(1)
				: replacement.toLowerCase();
			return p1 + '<span class="highlight">' + replacedWord + "</span>" + p3;
		});
	}

	convertTimeToAmerican(text) {
		return text.replace(/(\d{1,2})\:(\d{1,2})/g, (match, p1, p2) => {
			if (p2.length === 1) {
				p2 = '0' + p2;
			}
			return `<span class="highlight">${p1}.${p2}</span>`;
		});
	}

	convertTimeToBritish(text) {
		return text.replace(/(\d{1,2})\.(\d{1,2})/g, (match, p1, p2) => {
			if (p2.length === 1) {
				p2 = '0' + p2;
			}
			return `<span class="highlight">${p1}:${p2}</span>`;
		});
	}

}

module.exports = Translator;