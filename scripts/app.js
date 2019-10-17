(function(){
'use strict';

  angular.module('LunchCheck', [])
         .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope)
  {
      $scope.lunchMenu = "";
      $scope.lunchMenuCheckResult = "";
      $scope.CheckLunchMenu = function() {
        var numberOfItems = 0;
        var lunchMenu = $scope.lunchMenu;
        var lunchItems = lunchMenu.split(",");
        for(var i=0; i<lunchItems.length; i++) {
          if(lunchItems[i].trim().length > 0) {
            numberOfItems++;
          }
        }
        if(numberOfItems == 0) {
          $scope.lunchMenuCheckResult = "Please enter data first";
        } else if(numberOfItems > 3) {
          $scope.lunchMenuCheckResult = "Too Much!";
        } else if(numberOfItems > 0) {
          $scope.lunchMenuCheckResult = "Enjoy!";
        } else {
          $scope.lunchMenuCheckResult = "";
        }
      };
  };
})();
