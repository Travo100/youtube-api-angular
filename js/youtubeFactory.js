(function(){
  'use strict';

  angular
    .module('youtubeApp')
    .factory('youtubeService', youtubeService);

    function youtubeService($http) {
      
      var apiKey = "AIzaSyD2BlKZRfOC9pRTH9gKf_rBiirwUqv8CcY",
          apiURL = "https://www.googleapis.com/youtube/v3/search?videoEmbeddable=true&order=date&part=snippet&channelId=UCrWZwLUJBoJ6U0ZbFNmpykA&type=video&maxResults=50&key=" + apiKey,
          youtubeFactory = {};
      
      youtubeFactory.getVideos = function() {
        return $http.get(apiURL);
      };
      
      return youtubeFactory;
    
    }
})();