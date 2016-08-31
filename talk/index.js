var hello = function(name){
    console.log('hello' + name);
}
var intro =function() {
    console.log("I am done called index.js");
}

module.exports = {
    hello: hello,
    intro: intro
}