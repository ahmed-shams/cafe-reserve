'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function($rootScope, $scope, userService, $timeout) {
    $rootScope.smallText = 'Your Reservation';
    $rootScope.step = 2;
    
    $timeout(function () { 
        $rootScope.showLoadingDiv = false;         
    }, 3000);   
    

    $scope.user = userService.user;

});