promoApp.controller('schemaController', function($scope,$http,$location) {
   
    
   
    $scope.schema = {
    type: 'object',
    properties: {
            
     firstname: { type: 'string', minLength: 2, title: 'First Name'},
      
          lastname: { type: 'string', minLength: 2, title: 'Last Name'},
     
     Primary_Contact: {
        type: 'string',
        enum: ['8682843659','9860066188']
     },
        gender:{
               type:'string',
   enum: ['option1','option2']
     } ,
     
  
    devices:{
      type: 'array',
      items:
        {
          type: 'string',
          enum: ['a','b','c']
        },
      } 
                }
  };
    
    $scope.form = [   
       
        {
            key : 'firstname',
            type : 'string'
        },
        {
            key: 'lastname',
            type:'string',
        },
        {
            key : 'Primary_Contact',
            type:'select'
        },
        
    {
    key: 'gender',
    title:'Gender',
      type:'radios',
   titleMap:[
       {value:'option1',
   name:'Male'
   },
   {
       value: 'option2',
       name:'Female'
   }
    ]}   ,
  {
      key:'devices',
      title:'Devices',
     titleMap:{
         'a':'Mobile',
         'b':'Desktop',
         'c':'Laptop'
     }
  },
    {
      type: 'submit',
      title: 'Save'
     
    }
  ];

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