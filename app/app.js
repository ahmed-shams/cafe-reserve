'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'timer'
]).factory('userService', function($rootScope) {
  var userService = {};

  userService.user = {};

  userService.prepForBroadcast = function(usr) {
    this.user = usr;
    this.broadcastItem();
  };

  userService.broadcastItem = function() {
    $rootScope.$broadcast('handleBroadcast');
  };

  return userService;
}).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]).run(function($rootScope, $location) {
    $rootScope.smallTitle = $location.path() == '/view1' ? 'Book a Reservation' : 'Your Reservation';
    $rootScope.step = 1;
    $rootScope.showLoadingDiv = true;    
});;


