//Native Driver
//conect the controller to database directly
//create reusable connection in app.js
//get connection when we need it
//var dbconn =require('../data/dbconnection.js');
//
//// we need this driver in order to retrive all data related to an id, instead of just one id
//var ObjectId = require('mongodb').ObjectId;
////link to json data
//var hotelData = require('../data/hotel-data.json');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Hotel = mongoose.model('Hotel');

var runGeoQuery = function (req, res) {
    //extract value of query and create GeoJson points-->calculate coordinate on the sphere
    var lng = parseFloat(req.query.lng);
    var lat = parseFloat(req.query.lat);
    var point = {
        type: 'Point',
        coordinates: [lng, lat]
    };

    var geoOptions = {
        //serch on surface of sphere by true
        spherical: true,
        maxDistance: 2000, //2000km
        num: 5

    };

    Hotel //points, geoOptions
        .geoNear(point, geoOptions, function (err, results, stats) {
        console.log("Geo Result: ", results);
        console.log("Geo Stat: ", stats);
        if (err) {
            console.log("Error finding hotel");
            res
                .status(500)
                .json(results);
        } else {
            res //show result on browser
                .status(200)
                .json(results);
        }






    });
};

module.exports.hotelsGetAll = function (req, res) {
    //Native Driver  
    //    var db = dbconn.get();
    //    //get collection 
    //    var collection =db.collection('hotels');

    var offset = 0;
    var count = 5;
    var maxCount = 100;

    //check for number


    if (req.query && req.query.lat && req.query.lng) {
        runGeoQuery(req, res);
        return;
    }
    //check query properties are exists
    if (req.query && req.query.offset) {
        //decimal based 10
        offset = parseInt(req.query.offset, 10);
    }

    if (req.query && req.query.count) {
        //decimal based 10
        count = parseInt(req.query.count, 10);
    }

    if (isNaN(offset) || isNaN(count)) {
        res
            .status(400)
            .json({
                "message": "If supplied in querystring count and offset should be number"
            });
        return;
    }

    if (count > maxCount) {
        res
            .status(400)
            .json({
                "message": "Count limit of " + maxCount + " exceeded"
            });
        return;
    }

    //display in browser
    Hotel
        .find()
        .skip(offset)
        .limit(count)
        .exec(function (err, hotels) {

            if (err) {
                console.log("Error finding hotels");
                res
                    .status(500)
                    .json(err);

            } else {

                console.log('Found hotels', hotels.length);
                res
                    .status(200)
                    .json(hotels);
            }
            return;

        });




    //Native Driver: 
    //convert result to array json file so that we can view it on browser
    //    collection
    //        .find()
    //        .skip(offset)      //how many document we need to skips, starting from 0
    //        .limit(count)      //set number of document we need to return
    //        .toArray(function(err,docs){
    //            console.log("Found hotels", docs);
    //            res
    //                .status(200)
    //                .json(docs);
    //        });
};

//create controller for hotelId
module.exports.hotelsGetOne = function (req, res) {
    var id = req.params.hotelId;

    console.log('GET hotelId', id);

    Hotel
        .findById(id)
        .exec(function (err, doc) {
            var response = {
                status: 200,
                message: doc
            };
            if (err) {
                console.log("Error finding hotel");
                response.status = 500;
                response.message = err;
            } else if (!doc) {
                console.log("HotelId not found in database", id);
                response.status = 404;
                response.message = {
                    "message": "Hotel ID not found " + id
                };
            }
            res
                .status(response.status)
                .json(response.message);
            return;
        });

};


//add new hotel to database-->use in form
module.exports.hotelsAddOne = function (req, res) {
    //get collection 
    var db = dbconn.get();
    var collection = db.collection('hotels');
    var newHotel;
    if (req.body && req.body.name && req.body.stars) {

        newHotel = req.body;
        newHotel.stars = parseInt(req.body.stars, 10); //convert string into integer number

        console.log(newHotel);
        //pass all data of posted form back to database
        collection.insertOne(newHotel, function (err, response) {
            console.log(response.ops);
            res
                .status(201) //the correct status of new resource created is 201, not 200
                //to post a response object ==> use .ops
                .json(response.ops);
        });

    } else {

        console.log('Data is missing from the body');
        res
            .status(400)
            .json({
                message: "Required data missing from body"
            }); //message is keyword
    }

    //post: http://localhost:8080/api/hotels/new
};