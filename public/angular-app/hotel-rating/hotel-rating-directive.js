//angular.module('meanhotel').directive('hotelRating',hotelRating);
////<hotel-rating></hotel-rating>
//
////same name as above
//function hotelRating() {
//    return {
//        restrict: 'E',
//        template: '<span class="glyphicon glyphicon-heart" ng-repeat="star in vm.stars track by $index" style="font-size: 30px" >{{star}}</span>',
//        
//        bindToController: true,
//        controller: 'HotelController',
//        controllerAs: 'vm',
//        scope: {
//            
//            stars: '@'
//        }
//        
//        
//    }
//}


angular.module('meanhotel').component('hotelRating', {
    binding: {
        stars: '='
    },
    template: '<span class="glyphicon glyphicon-heart" ng-repeat="star in vm.stars track by $index" style="font-size: 30px" >{{star}}</span>',
    controller: 'HotelController',
    controllerAs: 'vm',
    
});