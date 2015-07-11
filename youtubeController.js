(function(){
  'use strict';

  angular
    .module('youtubeApp')
    .controller('mainController', mainController);

    function mainController(youtubeService) {
        
        var vm = this;
        vm.videoListing = [];

        function showVideos() {
          youtubeService.getVideos()
            .success(function(data){
              vm.videoListing = data.items;
          });
        }
        showVideos();
    }

})();