var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Hotel = mongoose.model('Hotel');

//public module
module.exports.reviewsGetAll = function (req, res) {
    //we want localhost/data/hotels/hotelId
    var hotelId = req.params.hotelId;
    //create a variable to hold individual hotel
    //Native
    // var thisHotel = hotelData[hotelId];
    console.log("Get the hotel Id: " + hotelId);

    Hotel
        .findById(hotelId)
        .select('reviews')
        .exec(function (error, doc) {

            var response = {
                status: 200,
                message: []
            };

            if (error) {
                console.log("Error finding hotel");
                response.satus = 500;
                response.message = error;
            } else if (!doc) {
                console.log("Hotel Id is not found in database", hotelId);
                response.satus = 404;
                response.message = {
                    "message": "Hotel ID not found " + hotelId
                };
            } else {
                response.message = doc.reviews ? doc.reviews : [];
            }

            res
                .status(response.status)
                .json(response.message);
        });
};

module.exports.reviewsGetOne = function (req, res) {
    var hotelId = req.params.hotelId;
    var reviewId = req.params.reviewId;

    console.log("The the hotel Id: " + hotelId + "has review: " + reviewId);
    //var review = hotel.reviews.id(reviewId);
    Hotel
        .findById(hotelId)
        .select('reviews')
        .exec(function (error, hotel_of_AnyName) {

            if (err) {
                console.log("Error finding hotel");
                res
                    .status(500)
                    .json(results);
            } else {
                res
                    .status(200)
                    .json(hotel_of_AnyName.reviews.id(reviewId));
            }
            
            return;
        });

};