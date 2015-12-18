'use strict';

angular.module('myApp.view1', ['ngRoute', 'timer'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])
.controller('View1Ctrl', function($scope) {

    $scope.timerRunning = true;
    var timeStarted = false;
    $scope.countdownVal = 300;

    $scope.startClock = function() {
        alert("Your reservation has expired");
        $scope.$broadcast('timer-start');
        $scope.timerRunning = true;

    };


});