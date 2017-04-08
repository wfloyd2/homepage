
angular.module('myApp', [])
.controller('ScrollController', ['$scope', '$location', '$anchorScroll',
  function($scope, $location, $anchorScroll) {
    $scope.gotoDiv = function(loc) {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash(loc);

      // call $anchorScroll()
      $anchorScroll();
    };
    $scope.gotoTop = function() {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('top');

      // call $anchorScroll()
      $anchorScroll();
    };

  }]);
