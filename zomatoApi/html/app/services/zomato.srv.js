(function () {
  'use strict';

 function zomatoDataService($http, globals, endpoints,  $q, $log ) {
          
     function GetData(ServiceName )
      {
       var deferred = $q.defer();
       
        $http.get(endpoints.zomatoApiEndPoint + endpoints.services[ServiceName],  {
          headers: { 'user_key':  globals.zomatoApiKey }})
          .success(
          function (data, status, headers, config) {
            $log.debug(data);
            deferred.resolve(data);
          })
          .error(function (data, status, headers, config) {
          deferred.reject(data);
        });

        return deferred.promise;        
      };

    return {
      hello: function () {

        globals.toastr.info('Hello');

        return ['some', 'data'];
      },
      
      
      GetData: function (ServiceName )
      {
        return  GetData(ServiceName );        
      }
      
    };
  }

  angular.module('zomatoApi', [])
    .factory('zomatoDataService', zomatoDataService);

})();
