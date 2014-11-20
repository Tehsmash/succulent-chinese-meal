'use strict';
function instanceFactory() {
  var instances = [];

  for(var i = 0; i < 1000; i++) {
    var n = {
      uuid: i, 
      name: ("test" + i.toString()),
    }
    instances.push(n);
  }

  return {
    getNetworks:function() {
      return instances;    
    },

    setNetwork:function(n) {
      instances.push(n);
    },

    deleteNetwork:function(i) {
      instances.splice(i, 1);
    }
  }
}
