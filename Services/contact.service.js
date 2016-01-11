(function () {
    "use strict";

    angular
        .module("Services")
        .factory("Contact", ContactService);
alert('asdfd')
    /* @ngInject */
    function ContactService(API, $http, Params) {
        var vm = this;

     //   vm.PATH = "/api/contact"; // /:info

        vm.get = function(id) {
           console.log('in services id get',id);
        };
        vm.set = function(id) {
            console.log('id set',id);   
        };

        return {
            get : function(id) {
           //     return vm.get(id);
            }
            

            
        };
    }

})();