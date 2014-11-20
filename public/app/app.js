'use strict';

var horizon = angular.module('horizon', [
    'mm.foundation',
    'ngRoute',
    'ngMessages',
    'horizon.compute',
    'horizon.networks',
    'networksServices'
])

horizon.factory('instancesFactory', instancesFactory);

