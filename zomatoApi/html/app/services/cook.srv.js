(function () {
  'use strict';


 function cookDataService($http, globals, endpoints,  $q, $log ) {
          
     function GetData(ServiceName , Query)
      {
       var deferred = $q.defer();
       
        $http.get(endpoints.cookApiEndPoint + endpoints.services[ServiceName] + '?' + Query,  {
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
      
      function GetDataDetails(ServiceName , Query)
      {
       var deferred = $q.defer();
       
        $http.get(endpoints.cookApiEndPoint + endpoints.services[ServiceName] + '?' + Query,  {
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
      
      
      GetData: function (ServiceName, Query )
      {
        return  GetData(ServiceName, Query );        
      },
      
      GetDataDetails: function (ServiceName, Query )
      {
        return  GetDataDetails(ServiceName, Query );        
      }
      
    };
  }

  angular.module('cookApi', [])
    .factory('cookDataService', cookDataService);
	
 

})();
