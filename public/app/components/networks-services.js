var networksServices = angular.module('networksServices', ['ngResource']);

networksServices.factory('Network', ['$resource',
  function($resource){
    return $resource('/networks', {}, {});
}]);
