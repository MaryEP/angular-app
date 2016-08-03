'use strict';

/**
 * @ngdoc service
 * @name projectsApp.current
 * @description
 * # current
 * Factory in the projectsApp.
 */

angular.module('projectsApp')

  .factory('current', function ($resource) {
return $resource('https://crossorigin.me/http://api.harpercollins.com/api/v3/hcapim?apiname=catalog&format=JSON&onsaledate=:saledate&apikey=wxa3y7c2b8rfjrqhbqyks3qu',{},{
    query: {
        method: 'GET',
        params: {
          saledate: null
        },
        isArray:false
      }
});
});

//http://api.harpercollins.com/api/v3/hcapim?apiname=catalog&format=JSON&onsaledate=08/01/16&apikey=wxa3y7c2b8rfjrqhbqyks3qu
//cors proxy needed
