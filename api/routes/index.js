

//index.js look up controller which is 'hotels-controllers.js'. 
//app.js routes for hotels in api/routes 
var express = require('express');
var router = express.Router();  //localhost:8080/api/

//set controllers
var CtrlHotels = require('../controllers/hotels-controllers.js');

router 
    .route('/hotels')   //localhost:8080/api/hotels

    //call controller to use
    .get(CtrlHotels.hotelsGetAll);  //hotelsGetAll is a public method exported by module

router
    //define parameter
    .route('/hotels/:hotelId')   //localhost:8080/api/hotels/<hotelId>

    //call controller to use
    .get(CtrlHotels.hotelsGetOne);  //add new controller

module.exports = router;