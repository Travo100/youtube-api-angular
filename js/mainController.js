(function(){
  'use strict';

  angular
    .module('smartyStreetsApp')
    .controller('mainController', mainController);

    function mainController(smartyService) {
        
        var vm = this;
        vm.message = "Hello Smarty";

        vm.listAdresses = [];

        vm.getSmartyAddress = function(address) {
          smartyService.getAddress(address)
          .success(function(data){
            console.log(data.suggestions);
            vm.listAdresses = data.suggestions;
          });
        }; 

        vm.verifySmartyAddress = function(street, city, state) {
          smartyService.verifyAddress(street, city, state)
          .success(function(data){
            console.log(data);
          });
        };
        
    }
})();