'use strict';

angular.module('horizon.networks', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/networks', {
      templateUrl: 'networks/networks.html',
      controller: 'NetworksController'
    }).
    when('/networks/:networkId', {
      templateUrl: 'networks/network-details.html',
      controller: 'NetworksDetailController'
    }).
    otherwise({
      redirectTo: '/networks'
    });
}])

.controller('NetworksController', ['$scope', 'Network', function($scope, Network) {
  $scope.networks = Network.query();
}])
.controller('NetworksDetailController', ['$scope', '$routeParams', 'Network', function($scope, $routeParams, Network) {
  $scope.network = Network.get({id: $routeParams.networkId})
}]);
