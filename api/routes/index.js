//index.js look up controller which is 'hotels-controllers.js'. 
//app.js routes for hotels in api/routes 
var express = require('express');
var router = express.Router();  //localhost:8080/api/

//set controllers
var CtrlHotels = require('../controllers/hotels-controllers.js');
var CtrlReviews =require('../controllers/reviews-controllers.js')

//#1: Hotel Route
router 
    .route('/hotels')   //localhost:8080/api/hotels

    //call controller to use
    .get(CtrlHotels.hotelsGetAll)  //hotelsGetAll is a public method exported by module
    .post(CtrlHotels.hotelsAddOne);

router
    //define parameter
    .route('/hotels/:hotelId')   //localhost:8080/api/hotels/<hotelId>
    //Ex: http://localhost:8080/api/hotels/57c87f9dc31a70b8f8ea0394

    //call controller to use
    .get(CtrlHotels.hotelsGetOne)  //add new controller
    //use put to update existing data, the entire file
    //if want to update a specific field, we need to use patch
    .put(CtrlHotels.hotelsUpdateOne)
    .delete(CtrlHotels.hotelsDeleteOne);




//#2: Review Route

router 
    .route('/hotels/:hotelId/reviews')   

    //call controller to use
    .get(CtrlReviews.reviewsGetAll)
    .post(CtrlReviews.reviewsAddOne);

router 
    //define parameter
    .route('/hotels/:hotelId/reviews/:reviewId')   

    //call controller to use
    .get(CtrlReviews.reviewsGetOne)  //add new controller
    .put(CtrlReviews.reviewsUpdateOne)
    .delete(CtrlReviews.reviewsDeleteOne);

module.exports = router;

