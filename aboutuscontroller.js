promoApp.controller('aboutusController', function($scope,$http, $location, Contact){

	$scope.cars = [
        {
            name: 'Maruti Suzuki',
            type: 'Old',
            price: 400000

        },
        {
            name: 'Chevorlet Sparks',
            type: 'New',
            price: 600000
        },
        {
            name: 'Honda Amaze',
            type: 'Old',
            price: 500000
        }
    ];
});