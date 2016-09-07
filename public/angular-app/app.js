angular.module('meanhotel',['ngRoute'])
.config(config);
function config($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'angular-app/hotel-list/hotels.html',
        controller: 'HotelsController',
        controllerAs: 'vm'
    })
    .when('/hotels/:id', {  ///api/hotel/' + id
        //can be any name like /babys/:id
        templateUrl: 'angular-app/hotel-display/hotel.html',   //no s
        controller: 'HotelController',   //no s
        controllerAs: 'vm'
    });
    
}

