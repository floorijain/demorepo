
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
var optionArray =[];
if($scope.type === 'checkbox'){
         var titleMap ={};
                
         var str = $scope.Options;
              var checkOptions = str.split(",");
          angular.forEach(checkOptions, function (value, key) {
                console.log("***value", value);
                optionArray.push({
           "value": value,
"name":value
              })
            });

             
          $scope.formAdd = {
              titleMap: optionArray,
              key: $scope.name,
               type : "checkboxes"

          }
var objectAdd ={
    "items": {
  "enum": checkOptions,
  "type": "string",
    },
    "key":"checkbox",
    "type":"array"      
    
};
    }
if($scope.type === 'select'){
             var titleMap = [];
             var str = $scope.Options;
              var dropOptions = str.split(",");
             for(var i=0;i<dropOptions.length;i++){
                 titleMap.push({name: dropOptions[i]});
                 console.log("dropOptions ",dropOptions[i]);
                 console.log("titleMap ",titleMap);
             
    }
     var objectAdd = {
                "enum": dropOptions,
                title: $scope.fieldName,
                type: "string"

            };

 $scope.formAdd = {
              titleMap: titleMap,
              key: $scope.name,
               type : $scope.type,
options: $scope.dropOptions
                            };
     }
    
     if ($scope.type === "radios") {

            var str = $scope.Options;
            var radioOptions = str.split(",");
            console.log("**display options", radioOptions);

            angular.forEach(radioOptions, function (value, key) {
                console.log("***value", value);
                optionArray.push({
                    "value": value,
                    "name": value
                })
            });

            $scope.formAdd = {
                key: $scope.name,
                type: "radios",

                "titleMap": optionArray
            };

            var objectAdd = {
                "enum": radioOptions,
                title: $scope.name,
                type: "string"

            };
     }
            
            if ($scope.type === "text"){
                $scope.formAdd={
                     key: $scope.name,
                fieldType: $scope.type
                };
                var objectAdd={
                    title: $scope.name,
                type: "string"
                };
            }
            
     
     $scope.data.schemaInfo.properties[$scope.name] = objectAdd;
     
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
//             console.log("data: ", angular.toJson(data));

//             console.log("submit after push: ", data);
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
    $scope.editField=function(formfield){
         $scope.name = formfield.key;
        console.log($scope.form);
    }
    
//     $scope.update=function(formfield){
//         var formSelect = document.getElementById("fieldType");
//         var selecteddata = formSelect.options[formSelect.selectedIndex].value;
//         console.log("entered");
//         for (var i = 0; i < $scope.form.length; i++) {

//             if ($scope.form[i].key == formfield.key) {

//                 if($scope.type === 'select'){
//              var titleMap = [];
//              var str = $scope.Options;
//               var dropOptions = str.split(",");
//              for(var i=0;i<dropOptions.length;i++){
//                  titleMap.push({name: dropOptions[i]});
//                  console.log("dropOptions ",dropOptions[i]);
//                  console.log("titleMap ",titleMap);
//              }

//  $scope.formAdd = {
//               titleMap: titleMap,
//               key: $scope.name,
//                type : $scope.type,
// options: $scope.dropOptions
//                             };

//                     // $scope.data.schemaInfo.properties[$scope.fieldName] = formAdd;

//                     var data = $scope.data;
//                     // console.log("data object while put : ", data);

//                    var url='http://localhost:3000/api/formschema';
//                 $http.put(url +"/" +$scope.data._id, data).success(function (data, status, headers) {
//                         console.log("data: ", angular.toJson(data));

//                         console.log("submit after push: ", data);
//                     })
//                 }   }
//             }
//             }
    
    });