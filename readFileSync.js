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

var onFileLoad =function (err,file) {
    console.log('Got the file');
}
var file = fs.readFile('readFileSync.js', onFileLoad); //call itself

console.log("App continue");



