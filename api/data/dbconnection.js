//connect mongoclient to file (driver)
var MongoClient = require('mongodb').MongoClient;
//connect to connection string to server and database
var dburl = 'mongodb://localhost:27017/meanhotel';


var _connection =null;
var open =function () {
    //pass connection string and errors
    MongoClient.connect(dburl, function(err,db){
        if (err) {
            console.log("DB connection failed");
            return;
        }
        //store db in _connection
        _connection =db;
        console.log('DB connection open ', db);
    });
    //call back function 
};

var get = function() {
    
    return _connection;
};

module.exports = {
  open: open,
  get: get
    
};

