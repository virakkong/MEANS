var mongoose = require('mongoose');
var Hotel = mongoose.model('Hotel');

//public module
module.exports.reviewsGetAll = function(req, res){
         //we want localhost/data/hotels/hotelId
    var hotelId =req.params.hotelId;
    //create a variable to hold individual hotel
    //Native
   // var thisHotel = hotelData[hotelId];
   console.log("Get the hotel Id: " + hotelId);
    
    Hotel  
        .findById(hotelId)
        .select('reviews')
        .exec(function(error, doc){
            console.log("Return doc", doc);
            res
                .status(200)
                .json(doc.reviews);
        });
    
    
    
};

module.exports.reviewsGetOne = function(req, res){
   var hotelId =req.params.hotelId;
   var reviewId = req.params.reviewId;
    
   console.log("The the hotel Id: " + hotelId + "has review: " + reviewId );
    //var review = hotel.reviews.id(reviewId);
    Hotel  
        .findById(hotelId)
        .select('reviews')
        .exec(function(error,hotel_of_AnyName){
            res
                .status(200)
                .json(hotel_of_AnyName.reviews.id(reviewId));
        });
  
};