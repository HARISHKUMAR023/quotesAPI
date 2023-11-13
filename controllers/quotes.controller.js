const { get } = require("../routes/quotes.routes")
const   quote = require("../models/quotes.models")
const db = require('../data/database');
async function getramdomquote(req,res,next){
    let randomquote;
    try{

    
    randomquote = await quote.getrandomquote();
    }catch (error){
        return next(error);
    }
    res.json({
        quote: randomquote,
    });
    console.log(randomquote);
}
module.exports = {
    getramdomquote:getramdomquote,
}