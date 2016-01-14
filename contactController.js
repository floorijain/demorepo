promoApp.controller('contactController', function($scope,$http,$location, Contact) {

 $scope.showmyModal = false;
    $scope.toggleModal = function(){
        $scope.showmyModal = !$scope.showmyModal;
    }

var url="http://localhost:3000/api/contact/";
    //$scope.txtbox = "";
    $scope.details="";
$scope.put = function(detail){
            $http.put(url, { Id: detail._id, firstname: detail.fname })
            .success(function (data, status, headers) {
          //      $scope.ServerResponse = data;
           //     console.log("***$scope.ServerResponse>>>> ",$scope.ServerResponse);
                //$scope.details
                //$scope.ServerResponse = data;
            })
        }

        if($scope.detail !== undefined) {
    $scope.detail = Contact.get();
}
        $scope.edit = function(detail){
           
        Contact.set(detail);
                    
            $location.path("/edit");
        }

        $scope.delete = function(detail){
            $http.delete(url + detail._id)
            .success(function (data, status, headers) {
               // $scope.ServerResponse = data;
                $scope.reset();
               // console.log("***$scope.ServerResponse>>>> ",$scope.ServerResponse);
                //$scope.details
                //$scope.ServerResponse = data;
            })
        }

        errorCallback = function(){
        //console.log(data);
        


    }
    successCallback = function(data) {
    $scope.details=data.data;
  //  console.log("///***data ",data.data);
   }
   var config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            }
    $scope.reset = function() {
     //   console.log(config);
        $http.get(url, config).then(successCallback, errorCallback);

      };

 $scope.onSubmit = function(){
        // use $.param jQuery function to serialize data from JSON 
        var data = {
          firstname: $scope.editdetail.firstname,
          lastname: $scope.editdetail.lastname,
          emailaddress: $scope.editdetail.emailaddress       
        };
        var config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            }
       // console.log("$scope",$scope);
        if($scope.editdetail._id){
            data._id = $scope.editdetail._id;
$http.put(url+data._id,data,config).success(function(data,status,headers,config){

        }); 
        }else{
        $http.post(url,data,config).success(function(data,status,headers,config){
   $scope.reset();
        });    
        }
    
   }
    $scope.editdetail = Contact.get();    
    $scope.reset();


});