
var mongoose = require('mongoose');
var hotelSchema = new mongoose.Schema({
    //each object represents the field of the database and properties
    //double or long does  is not supported in mongoose
    //[String] is an array of String
    name: {
        type: String,
        required: true   //if no name, it won't let us do any update
    },
    stars: {
        type: Number,
        min:0,
        max: 5,
        "default": 0       //usually default is a key word so we need to put " "   
    },
    services: [String],
    description: String,
    photos: [String],
    currency: String 
    
});

mongoose.model('Hotel', hotelSchema, 'hotels');
//hotels is optional. it will created at execute if not input it.
