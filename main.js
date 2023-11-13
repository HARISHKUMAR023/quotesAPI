const express = require('express');
const app = express();
const port = 3000;
const db = require('./data/database');
const quoteroutes = require('./routes/quotes.routes');

app.use('/quots',quoteroutes);
app.use(function(error,req,res,next){
    res.status(500).json({
        message:'some thing went wrong'
    })
})
db.initDb().then(function(){
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));

}).catch(function (error){
console.log('connecting to the database failed');
})

