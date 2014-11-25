angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  console.log('LINKSSSSS', Links);
  $scope.data = {
    links: []
  };
  $scope.getLinks = function(){
    //calls getLinks from Links factory
    //on success/then make it appear in view
    // console.log('LINKS.RETRIEVALLINKS()   ',Links.retrieveLinks())
    Links.retrieveLinks().then(function(resp){
      console.log('DATAAAAAAA:',resp.data);
      // console.log('$scope.data.links after set   ',$scope.data.links)
      $scope.data.links = resp.data;
    });
  };
  $scope.getLinks();

});
