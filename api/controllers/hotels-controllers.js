//conect the controller to database directly
//create reusable connection in app.js
//get connection when we need it
var dbconn =require('../data/dbconnection.js');

// we need this driver in order to retrive all data related to an id, instead of just one id
var ObjectId = require('mongodb').ObjectId;
//link to json data
var hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req, res) {
    
    var db = dbconn.get();
    //get collection 
    var collection =db.collection('hotels');
    
    var offset = 0;
    var count = 5;
            //check query properties are exists
            if(req.query && req.query.offset) {
                 //decimal based 10
                offset = parseInt(req.query.offset,10);
            }
    
             if(req.query && req.query.count) {
                 //decimal based 10
                count = parseInt(req.query.count,10);
            }
    
    //convert result to array json file so that we can view it on browser
    collection
        .find()
        .skip(offset)      //how many document we need to skips, starting from 0
        .limit(count)      //set number of document we need to return
        .toArray(function(err,docs){
            console.log("Found hotels", docs);
            res
                .status(200)
                .json(docs);
        });
};

//create controller for hotelId
module.exports.hotelsGetOne = function(req, res) {
    
    //get collection 
     var db = dbconn.get();
     var collection =db.collection('hotels');
    
    
    
    //we want localhost/data/hotels/hotelId
    var hotelId =req.params.hotelId;
    //create a variable to hold individual hotel
    var thisHotel = hotelData[hotelId];
   console.log("Get the hotel Id: " + hotelId);
    
    collection
      .findOne({
    // in order to use ObjectId we need to include its driver as above ...ObjectId
        _id: ObjectId(hotelId)
        
        },function(err, doc){
        
        res
            .status(200)
            .json(doc); //we get only one id
          
      });
    
    
};

module.exports.hotelsAddOne =function(req,res) {
  console.log("Post new Hotel");
  //pass all data of posted form
  console.log(req.body);
    res 
       .status(200)
       .json(req.body);
};