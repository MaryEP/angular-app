'use strict';

/**
 * @ngdoc function
 * @name projectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectsApp
 */

  angular.module('projectsApp')
    .controller('MainCtrl', function($scope, current, $filter) {
      $scope.saledate = $filter('date')(new Date(),'MM/dd/yy');
      $scope.publisher = 'Harper Collins';
      $scope.books = current.query({
        saledate: $scope.saledate
      });

      $scope.findBooks = function (){
        $scope.warning = false;
        $scope.books = current.query({
          publisher: 'Harper Collins',
          saledate: $scope.saledate,
          authorname: $scope.authorname,
          title: $scope.title
        });
        if ($scope.publisher !=='Harper Collins') {
           $scope.warning = true;
           $scope.publisher = 'Harper Collins';
      }
      };

});
