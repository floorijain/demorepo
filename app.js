var promoApp = angular.module('promoApp', ['ui.router']);

promoApp.directive('helloWorld', function () {
        return {
            restrict: 'E',
            templateUrl: 'checkbox.html',
            controller: 'carController',
            controllerAs:'vm'
        }
    });

        promoApp.service('Contact', function(){
            var tempData = {};
            this.get = function() {
               return tempData;
            }

            this.set = function(a) {
               tempData = a;
            }
         });

promoApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME 
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })
        
        // nested list with custom controller
        .state('products', {
            url: '/products',
            templateUrl: 'partial-home-list.html',
            controller: function($scope) {
                $scope.sellers = ['Ram&Co', 'Manikchand&Co', 'Suresh&Co'];
            }
        })

        .state('edit', {
            url: '/edit',
            templateUrl: 'edit-form.html',
            controller: 'carController'
        })

                
        // nested list with just some random string data
        .state('contactus', {
            url: '/contactus',
            templateUrl: 'contact-form.html',
            controller: 'carController'
        })
// nested list with just some random string data
        .state('contactedpeople', {
            url: '/contactedpeople',
            templateUrl: 'contacted-people.html',
            controller: 'carController'
        })
        
        // ABOUT US PAGE
        .state('aboutus', {
            url: '/aboutus',
            views: {
                '': { templateUrl: 'partial-aboutus.html' },
                'columnOne@aboutus': { template: 'Here is how we work' },
                'columnTwo@aboutus': { 
                    templateUrl: 'table-data.html',
                    controller: 'carController'
                }
            }
            
        });
        
});

promoApp.controller('carController', function($scope,$http, $location, Contact) {
   var url="http://localhost:3000/api/contact/";
    $scope.txtbox = "";
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

//console.log($scope.detail);
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

   

    $scope.onClick = function(){
      //  console.log($scope.txtbox);
    }
    


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


    


    }
    $scope.editdetail = Contact.get();    
    $scope.reset();

});