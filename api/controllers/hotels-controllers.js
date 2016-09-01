//link to json data
var hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req, res) {
   console.log("Get the hotel");
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
