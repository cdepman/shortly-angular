angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function(){
    console.log("Passed-in Link:",$scope.link);
    Links.addLink($scope.link);
  };

});
