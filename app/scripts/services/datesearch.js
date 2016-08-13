'use strict';
/**
 * @ngdoc service
 * @name projectsApp.datesearch
 * @description
 * # datesearch -this partial is called 'datesearch' but is really a title search
 * Factory in the projectsApp.
 */
  angular.module('projectsApp')
    .factory('datesearch', function ($resource) {
      // Service logic
      // ...
      // Public API here
      return $resource ('https://crossorigin.me/http://api.harpercollins.com/api/v3/hcapim?apiname=catalog&format=JSON&title=American&apikey=wxa3y7c2b8rfjrqhbqyks3qu', {},{
        find: {
          method: 'GET',
          params: {
            title: null

          },
          isArray: false
  }


      });
      });
