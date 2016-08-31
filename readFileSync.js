//synchronous vs Asynchronous
//1. Synchronous
//var fs = require('fs');
//console.log("Going to get a file");
//var file = fs.readFileSync('readFileSync.js'); //call itself
//console.log('Got the file');
//
//console.log("App continue");


//2. Asynchronous

var fs = require('fs');
console.log("Going to get a file");
var file = fs.readFile('readFileSync.js', function() {
    console.log('Got the file');
}); //call itself

console.log("App continue");