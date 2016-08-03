'use strict';

/**
 * @ngdoc function
 * @name projectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectsApp
 */

  angular.module('projectsApp')
    .controller('MainCtrl', function($scope, current) {
      $scope.books = current.query({
        saledate: '08/01/16'
      });

  $scope.refreshCurrent = function(){
    $scope.books = current.query({
      saledate: $scope.saledate
    });
  };
  });
