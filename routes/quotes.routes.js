const express = require('express');
const  quotescontroller = require('../controllers/quotes.controller');

const router = express.Router();
router.get('/',quotescontroller.getramdomquote);
module.exports = router;