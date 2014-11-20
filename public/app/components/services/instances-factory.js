'use strict';
function instancesFactory() {
  var instances = [];

  for(var i = 0; i < 10; i++) {
    var n = {
      uuid: i, 
      name: ("test" + i.toString()),
    }
    instances.push(n);
  }

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
