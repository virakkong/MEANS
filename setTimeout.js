//asynchronous
console.log("1: Start app");
var holdon = setTimeout(function() {
 console.log("2: in the setTimeout")
}, 1000);
console.log("3: End Time out");