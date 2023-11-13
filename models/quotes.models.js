const db = require('../data/database');

class quote {
    static async getrandomquote() {
        const quotes = await db.getDb().collection('quotes').find({}).toArray();
        const randomquoteIndex = Math.floor(Math.random() * quotes.length);
        const randomquote = quotes[randomquoteIndex];
        return randomquote.text;
         }
}
module.exports = quote;
