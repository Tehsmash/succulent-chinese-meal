'use strict';

angular.module('horizon.networks', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/networks', {
      templateUrl: 'networks/networks.html',
      controller: 'NetworksCtrl'
    }).
    when('/networks/:networkId', {
      templateUrl: 'networks/network-details.html',
      controller: 'NetworksDetailCtrl'
    }).
    otherwise({
      redirectTo: '/networks'
    });
}])

.controller('NetworksCtrl', ['$scope', 'Network', function($scope, Network) {
  $scope.networks = Network.query();
}])
.controller('NetworksDetailCtrl', ['$scope', '$routeParams', 'Network', function($scope, $routeParams, Network) {
  $scope.network = Network.get({id: $routeParams.networkId})
}]);
