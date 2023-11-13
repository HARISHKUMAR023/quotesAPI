const mongodb=require('mongodb');
const MongoClient = mongodb.MongoClient;
let database;
async function initDb(){
 const client = await MongoClient .connect('mongodb+srv://harish:Harish023@atlascluster.hrznqyj.mongodb.net/?retryWrites=true&w=majority');
 database = client.db("first-api");
}
function getDb(){
    if (!database){
        throw Error('Database not initialized');
    }
    return database;
}
module.exports = {
    getDb:getDb,
    initDb:initDb,
}