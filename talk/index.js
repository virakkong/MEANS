
var filename = 'index.js';
var hello = function(name){
    console.log('hello' + name);
}
var intro =function() {
    console.log("I am done called " + filename);
}

module.exports = {
    hello: hello,
    intro: intro
}