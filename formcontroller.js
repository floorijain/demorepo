promoApp.controller('formController', function ($scope, Form) {


    $scope.name = "";
    $scope.gender = "";
    $scope.friends = "";

    $scope.savedata = function () {
        var data = {
            name: $scope.name,
            gender: $scope.gender,
            friends: $scope.friends,
            vehicle: $scope.vehicle
        };
        console.log(angular.toJson(data));

        Form.submitData(data);
    }
});