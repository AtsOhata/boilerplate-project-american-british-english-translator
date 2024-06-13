'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {

  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const text = req.body.text;
      const locale = req.body.locale;
      if (locale == undefined || text == undefined) {
        return res.send({ error: "Required field(s) missing" });
      }
      if (text == "") {
        return res.send({ error: "No text to translate" });
      }
      if (!["american-to-british", "british-to-american"].includes(locale)) {
        return res.send({ error: "Invalid value for locale field" });
      }
      const translation = locale == "american-to-british" ? translator.toBritishEnglish(text) : translator.toAmericanEnglish(text);
      if (text == translation) {
        return res.send({ text: text, translation: "Everything looks good to me!" });
      }
      return res.send({ text: text, translation: translation });
    });
};
