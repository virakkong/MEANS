module.exports.hotelsGetAll = function(req, res) {
   console.log("Get the hotel");

            //send back
            res 
               .status(200)
               .json( {'HotelDataAll': true} );  
};