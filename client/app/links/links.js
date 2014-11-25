angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {
    links: []
  };
  $scope.getLinks = function(){
    //calls getLinks from Links factory
    //on success/then make it appear in view
    Links.retrieveLinks().then(function(resp){
      $scope.data.links = resp.data;
    });
  };
  $scope.getLinks();

});
