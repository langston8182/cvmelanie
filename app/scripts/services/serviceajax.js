'use strict';

/**
 * @ngdoc service
 * @name melanieCvApp.serviceAjax
 * @description
 * # serviceAjax
 * Factory in the melanieCvApp.
 */
angular.module('melanieCvApp')
  .factory('serviceAjax', function ($http) {
    return {
      message: function (message) {
        return $http.post('http://www.melanieboussat.com:8080/message', message);
      }
    };
  });
