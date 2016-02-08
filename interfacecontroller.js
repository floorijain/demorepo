promoApp.controller('interfacecontroller', function($scope,$http, Form){
  
  
    Form.getSchemaInfo('autoform').then(function(tmpObj){
        
        $scope.data=tmpObj.data[0];
        console.log("data object", $scope.data);
   $scope.schema =tmpObj.data[0].schemaInfo;
  // console.log( "data schema",$scope.schema);
   $scope.form =tmpObj.data[0].formInfo;    
     
    //console.log("data form", $scope.form);
   });
//           $http.get('http://localhost:3000/api/contact/', config).then(successCallback, errorCallback);
//                             errorCallback = function(){
//         //console.log(data);

//     }
//     successCallback = function(data) {
//     $scope.details=data.data;
//   //  console.log("///***data ",data.data);
//    }
//     $scope.details=data.data;
               
//                var config = {
//                 headers : {
//                     'Content-Type': 'application/json'
//                 }
//                };
             


    $scope.edit = function () {
//     if($scope.type === 'checkbox'){
//          var titleMap = [{
//              name: $scope.Options,
//              value: $scope.Options
//          }];
//           $scope.formAdd = {
//               titleMap: titleMap,
//               key: $scope.name,
//                type : $scope.type
//                             };
//      }
//      else{
//         $scope.formAdd = {
//               key: $scope.name,
//                type : $scope.type,
//                options : $scope.Options

//   };
//      }
var optionArray =[];
if($scope.type === 'checkbox'){
         var titleMap ={};
                
         var str = $scope.Options;
              var checkOptions = str.split(",");
          angular.forEach(checkOptions, function (value, key) {
                console.log("***value", value);
                optionArray.push({
           value: checkOptions
              })
            });
}
             
          $scope.formAdd = {
              titleMap: optionArray,
              key: $scope.name,
               type : $scope.type,

          }
//      }
//      else{
//         $scope.formAdd = {
//               key: $scope.name,
//                type : $scope.type,
//                options : $scope.Options

//   };
//      }
if($scope.type === 'select'){
             var titleMap = [];
             var str = $scope.Options;
              var dropOptions = str.split(",");
             for(var i=0;i<dropOptions.length;i++){
                 titleMap.push({name: dropOptions[i]});
                 console.log("dropOptions ",dropOptions[i]);
                 console.log("titleMap ",titleMap);
             }

 $scope.formAdd = {
              titleMap: titleMap,
              key: $scope.name,
               type : $scope.type,
options: $scope.dropOptions
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
                      var titleMap = [];
             var str = $scope.Options;
              var radioOptions = str.split(",");
             for(var i=0;i<radioOptions.length;i++){
                 titleMap.push({name: radioOptions[i],
                 value: radioOptions[i]});
                 console.log("radioOptions ",radioOptions[i]);
                 console.log("titleMap ",titleMap);
             }

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


      $scope.form.splice(length-1,0,$scope.formAdd);
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
    
 $scope.deleteField= function(formfield){
console.log(formfield);
        var index = $scope.form.indexOf(formfield);
        $scope.form.splice(index, 1);
        console.log("****deleted", $scope.form);

        var data = $scope.data;
        console.log("data object while put : ", data);
 var url='http://localhost:3000/api/formschema';
     $http.put(url +"/" +$scope.data._id, data).success(function (data, status, headers) {
//             console.log("data: ", angular.toJson(data));

//             console.log("submit after push: ", data);
         })
 $scope.editField=function(formfield){
     $scope.name = formfield.key;
        console.log($scope.form);
  
     
 }
 
 
 }
    $scope.shiftUp=function(formfield)
    
    {
        
        var index = $scope.form.indexOf(formfield);
        console.log("****", index);
       
            var temp = $scope.form[index];
            $scope.form[index] = $scope.form[index-1];
           $scope.form[index-1] = temp;
           
       console.log("swapped array****",$scope.form);
       
       var data = $scope.data;
        console.log("data object while put : ", data);
var url='http://localhost:3000/api/formschema';
         $http.put(url +"/" +$scope.data._id, data).success(function (data, status, headers) {
            console.log("data: ", angular.toJson(data));

            console.log("submit after push: ", data);
        })
    
    }
    
    $scope.shiftDown=function(formfield)
    {
        
        var form=$scope.form;
        var index = $scope.form.indexOf(formfield);
        console.log("****", index);
       
            var temp = form[index];
            form[index] = form[index+1];
           form[index+1] = temp;
           
       console.log("swapped array****",form);
       
       var data = $scope.data;
        console.log("data object while put : ", data);
var url='http://localhost:3000/api/formschema';
                $http.put(url +"/" +$scope.data._id, data).success(function (data, status, headers) {
            console.log("data: ", angular.toJson(data));

            console.log("submit after push: ", data);
        })
       
    }
    
    });