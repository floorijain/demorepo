promoApp.controller('interfacecontroller', function($scope,$http, Form){
  
  
    Form.getSchemaInfo('autoform').then(function(tmpObj){
        
        $scope.data=tmpObj.data[0];
        console.log("data object", $scope.data);
   $scope.schema =tmpObj.data[0].schemaInfo;
  // console.log( "data schema",$scope.schema);
   $scope.form =tmpObj.data[0].formInfo;    
     
    //console.log("data form", $scope.form);
   });
   
    $scope.edit = function () {
    if($scope.type === 'checkbox'){
         var titleMap = [{
             name: $scope.Options,
             value: $scope.Options
         }];
          $scope.formAdd = {
              titleMap: titleMap,
              key: $scope.name,
               type : $scope.type
                            };
     }
     else{
        $scope.formAdd = {
              key: $scope.name,
               type : $scope.type,
               options : $scope.Options

  };
     }

if($scope.type === 'select'){
             var titleMap = [
                 {
         name: $scope.Options,
                 },
          {
         name: $scope.Options1,
                            }                                
             ];
 $scope.formAdd = {
              titleMap: titleMap,
              key: $scope.name,
               type : $scope.type,
options: $scope.Options,
options1: $scope.Options1
                            };
     }
     
// if($scope.type === 'select'){
//     var titleMap=[{
//         value: $scope.Options,
//              }];
// }
// else
//    {
//        $scope.formAdd ={
//               key: $scope.name,
//        type: $scope.type,
//        options:$scope.Options
//    };
//    }


     if($scope.type === 'radios'){
         var titleMap = {
            
             value: $scope.Options
         };
          $scope.formAdd = {
              titleMap : titleMap,
              key: $scope.name,
               type : $scope.type,
                            };
     }
     else{
    var objectAdd = {
         title : $scope.name,
         type: "string"
     };
     
     
     $scope.data.schemaInfo.properties[$scope.name] = objectAdd;
     }
    console.log("updated Object",$scope.data.schemaInfo.properties[$scope.name]);


     $scope.form.push($scope.formAdd);
    console.log("updated form",$scope.form);

    }
    
    $scope.update = function () {
      var config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            }
      var data = $scope.data;
       var url='http://localhost:3000/api/formschema';
              $http.put(url+"/"+$scope.data._id,data).success(function(data,status){
      
          
         // console.log("put",$scope.data);
        })
    }
    
    });