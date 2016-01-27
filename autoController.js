promoApp.controller('autoController', function($scope,$http,Form) {
   
    
//    call service method to get schemainfo
 
   Form.getSchemaInfo('autoform').then(function(tmpObj){
   $scope.schema =tmpObj.data[0].schemaInfo;
   $scope.form =tmpObj.data[0].formInfo;      
    console.log(tmpObj);
   });
   
 

  $scope.model = {};
  
      $scope.onSubmit = function (myForm) {
          console.log("...myForm",myForm);
        var url="http://localhost:3000/api/form/";
  var data = {
          firstname: myForm.firstname.$modelValue,
          lastname:myForm.lastname.$modelValue,
          Primary_Contact:myForm.Primary_Contact.$modelValue,
          gender:myForm.gender.$modelValue,
          devices:myForm.devices.$modelValue
           
        };
        var config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            }
        $http.post(url,data,config).success(function(data,status,headers,config){

        });    
    }
    
});