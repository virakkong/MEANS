//link to json data
var hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req, res) {
   console.log("Get the hotel");

            //send back
            res 
               .status(200)
               .json(hotelData);  //http://localhost:8080/api/hotels
};

//create controller for hotelId
module.exports.hotelsGetOne = function(req, res) {
    //we want localhost/data/hotels/hotelId
    var hotelId =req.params.hotelId;
    
    //create a variable to hold individual hotel
    var thisHotel = hotelData[hotelId];
   console.log("Get the hotel Id: " + hotelId);

            //send back
            res 
               .status(200)
               .json(thisHotel);  //http://localhost:8080/api/hotels/thisHotel
};
