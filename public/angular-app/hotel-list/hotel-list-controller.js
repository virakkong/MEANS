angular.module('meanhotel').controller('HotelsController', HotelsController);

//inject Factory
function HotelsController(hotelDataFactory) {
    var vm = this;
    vm.title = 'Mean Hotel App, Baby';
    hotelDataFactory.hotelList().then(function(response){
         console.log(response.data);
       vm.hotels =response.data;
    });
}