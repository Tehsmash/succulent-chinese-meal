'use strict';

angular.module('horizon.compute', [
  'ngRoute',
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/compute/launch_instance', {
      templateUrl: 'compute/launch-instance.html',
      controller: 'LaunchInstancesController'
    })
    .when('/instances', {
      templateUrl: 'compute/instances.html',
      controller: 'InstancesController'
    })
    .otherwise({
      redirectTo: '/instances'
    });
}])

.controller('InstancesController', [
  '$scope',
  'instancesFactory',
  function($scope, instancesFactory) {

    $scope.instances = instancesFactory.getInstances();

    // Clear filter
    $scope.clearFilter = function(){
      $scope.filter = null;
    }

    // Delete an instance
    $scope.deleteInstance = function(index) {
      instancesFactory.deleteInstance(index);
    }
  }
])
  
.controller('LaunchInstancesController', [
  '$scope',
  'instancesFactory', 
  function($scope, instancesFactory) {
    $scope.instances = instancesFactory.getInstances();

    // Create an instance from the instance object
    $scope.createInstance = function() {
      var uuid = Math.random().toString(36).substring(7);
      var instance = {
        uuid: uuid, 
        name: $scope.instance.name || uuid,
      };
      instancesFactory.setInstance(instance);
      $scope.newInstance();
    }

    // Initialise empty instance object. 
    $scope.newInstance = function() {
      $scope.instance = {
        uuid: null,
        name: null,
      };  
    }

    $scope.newInstance(); 
  }
]);




