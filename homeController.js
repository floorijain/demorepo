promoApp.controller('homeController', function($scope,$http) {

 $scope.showModal = false;
    $scope.toggleModal = function(){
        $scope.showModal = !$scope.showModal;
    }
});