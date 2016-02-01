promoApp.service('Form', function($http) {
    //var shared_data="";
    
   return {
       submitData : submitData,
       getSchemaInfo : getSchemaInfo,
        data : {} 
        
    }


    
    function submitData(serviceData) {
        var config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            } 
        var data = serviceData;
var url="http://localhost:3000/api/form";
        $http.post(url, data,config).success(function(data, status,headers,config) {
    
      console.log("serviceData: ",angular.toJson(data));
      
        })
     
    }
    
    function getSchemaInfo(formname) {
    var url='http://localhost:3000/api/formschema?name='+formname;
      responseData = $http.get(url)
            .success(function (data, status, headers, config) {
//                 console.log("data****: ",data[0]);
                
                //return angular.toJson(data);
               //return data[0];
                })
                
                return responseData;
    }
})