'use strict';

angular.module('horizon.networks', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/networks', {
    templateUrl: 'networks/networks.html',
    controller: 'NetworksCtrl'
  });
}])

.controller('NetworksCtrl', ['$scope', 'Network', function($scope, Network) {
  $scope.networks = Network.query();
}]);
