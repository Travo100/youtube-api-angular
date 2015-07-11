(function(){
  'use strict';

  angular
    .module('smartyStreetsApp')
    .factory('smartyService', smartyService);

    function smartyService($http) {
      
      var authID = '1395590700721338964';
      var authIDSecret = 'bb8a0f8e-8692-4a35-a441-e964d536cdd0';
      var authToken = '38kZZ5NfUVAwB8k30SpV';
      var stateFilter = 'CA';
      var suggestion = '3';

      var smartyFactory = {};

        smartyFactory.getAddress = function(address) {
          return $http.get('https://autocomplete-api.smartystreets.com/suggest?auth-id=1395590700721338964&prefix='+address+'&state_filter'+stateFilter+'&suggestions='+suggestion);
        };

        smartyFactory.verifyAddress = function(street,city,state) {
          return $http.post('https://api.smartystreets.com/street-address?auth-id='+authIDSecret+'&auth-token='+authToken+'&street='+street+'&city='+city+'&state='+state+'candidates=10');
        };

      return smartyFactory;
    
    }
})();