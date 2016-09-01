//conect the controller to database directly
//create reusable connection in app.js
//get connection when we need it
var dbconn =require('../data/dbconnection.js');

//link to json data
var hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req, res) {
    
    var db = dbconn.get();
    console.log('The database: ', db); //The database:  Db {
    
    
    console.log("GET the hotel");
    
     //set offset and count
            var offset = 0;
            var count = 5;
            //check query properties are exists
            //
            if(req.query && req.query.offset) {
                 //decimal based 10
                offset = parseInt(req.query.offset,10);
            }
    
             if(req.query && req.query.count) {
                 //decimal based 10
                count = parseInt(req.query.count,10);
            }
    
            var returnData = hotelData.splice(offset, offset+count);
            //send back
            res 
               .status(200)
//             .json(thisHotel);  //http://localhost:8080/api/hotels/thisHotel
            
               .json(returnData); 
                //http://localhost:8080/api/hotels?offset=2&count=3
};

//create controller for hotelId
module.exports.hotelsGetOne = function(req, res) {
    //we want localhost/data/hotels/hotelId
    var hotelId =req.params.hotelId;
    
    //create a variable to hold individual hotel
    var thisHotel = hotelData[hotelId];
   console.log("Get the hotel Id: " + hotelId);
    res
      .status(200)
      .json(thisHotel);
};

module.exports.hotelsAddOne =function(req,res) {
  console.log("Post new Hotel");
  //pass all data of posted form
  console.log(req.body);
    res 
       .status(200)
       .json(req.body);
};