const database = require("mongoose");
const is_heroku = process.env.IS_HEROKU || false;
const databaseName = "express"
const herokuURI = 
"mongodb+srv://theMongoAdmin:accidentalLoginSteps@cluster0.ztvps.mongodb.net/"+databaseName+"?retryWrites=true&w=majority"
const localURI = 
"mongodb://localhost/"+databaseName+"?authSource=admin&retryWrites=true"
if (is_heroku) {    
    database.connect(herokuURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });
}
else {
    database.connect(herokuURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });
}
  
module.exports = database
  
  
  