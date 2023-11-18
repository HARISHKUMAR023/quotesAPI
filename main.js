const express = require('express');
const app = express();
const port = 3000;
const db = require('./data/database');
const quoteroutes = require('./routes/quotes.routes');

app.use('/quots',quoteroutes);
app.use(function(error, req, res, next) {
    console.error(error.stack); 

    res.status(500).json({
        error: 'Internal Server Error',
        message: error.message || 'Something went wrong',
    });
});
app.use((req, res, next) => {
    res.status(404).json({
        error: 'Not Found',
        message: 'The requested resource was not found on this server.',
    });
});


db.initDb().then(function(){
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));

}).catch(function (error){
console.log('connecting to the database failed');
})

