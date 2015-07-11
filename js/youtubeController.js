(function(){
  'use strict';

  angular
    .module('youtubeApp')
    .controller('mainController', mainController);

    function mainController(youtubeService) {
        
        var vm = this;
        vm.videoListing = [];
        vm.message = "YouTube Data API with AngularJS";
        
        function showVideos() {
          youtubeService.getVideos()
            .success(function(data){
              vm.videoListing = data.items;
          });
        }
        showVideos();
    }
})();