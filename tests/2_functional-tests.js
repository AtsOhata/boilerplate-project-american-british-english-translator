const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

suite('Functional Tests', () => {
	suite('tests', function () {
		test('Test case 001: Translation with text and locale fields', function (done) {
			chai.request(server)
				.keepOpen()
				.post('/api/translate')
				.send({
					"text": "Can you toss this in the trashcan for me?",
					"locale": "american-to-british",
				})
				.end(function (err, res) {
					assert.equal(res.status, 200);
					assert.equal(res.body.text, "Can you toss this in the trashcan for me?");
					assert.equal(res.body.translation, "Can you toss this in the <span class=\"highlight\">bin</span> for me?");
					done();
				});
		});
		test('Test case 002: Translation with text and invalid locale field', function (done) {
			chai.request(server)
				.keepOpen()
				.post('/api/translate')
				.send({
					"text": "Can you toss this in the trashcan for me?",
					"locale": "invalid",
				})
				.end(function (err, res) {
					assert.equal(res.status, 200);
					assert.equal(res.body.error, "Invalid value for locale field");
					done();
				});
		});
		test('Test case 003: Translation with missing text field', function (done) {
			chai.request(server)
				.keepOpen()
				.post('/api/translate')
				.send({
					"locale": "american-to-british",
				})
				.end(function (err, res) {
					assert.equal(res.status, 200);
					assert.equal(res.body.error, "Required field(s) missing");
					done();
				});
		});
		test('Test case 004: Translation with missing locale field', function (done) {
			chai.request(server)
				.keepOpen()
				.post('/api/translate')
				.send({
					"text": "aaa",
				})
				.end(function (err, res) {
					assert.equal(res.status, 200);
					assert.equal(res.body.error, "Required field(s) missing");
					done();
				});
		});
		test('Test case 005: Translation with empty text', function (done) {
			chai.request(server)
				.keepOpen()
				.post('/api/translate')
				.send({
					"text": "",
					"locale": "american-to-british",
				})
				.end(function (err, res) {
					assert.equal(res.status, 200);
					assert.equal(res.body.error, "No text to translate");
					done();
				});
		});
		test('Test case 006: Translation with text that needs no translation', function (done) {
			chai.request(server)
				.keepOpen()
				.post('/api/translate')
				.send({
					"text": "Can you toss this in the trashcan for me?",
					"locale": "british-to-american",
				})
				.end(function (err, res) {
					assert.equal(res.status, 200);
					assert.equal(res.body.text, "Can you toss this in the trashcan for me?");
					assert.equal(res.body.translation, "Everything looks good to me!");
					done();
				});
		});
	});
});
