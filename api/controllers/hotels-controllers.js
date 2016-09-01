//link to json data
var hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req, res) {
   console.log("Get the hotel");

            //send back
            res 
               .status(200)
               .json(hotelData);  
};