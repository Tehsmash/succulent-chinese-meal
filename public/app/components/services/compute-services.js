'use strict';

angular.module('computeServices', [])

.factory('instancesFactory', 
  function() {
    var instances = [];

    return {
      getInstances:function() {
        return instances;    
      },

      setInstance:function(n) {
        instances.push(n);
      },

      deleteInstance:function(i) {
        instances.splice(i, 1);
      }
    }
  }
);
