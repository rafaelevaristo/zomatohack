(function() {
  'use strict';

  angular
    .module('zomatoApp')
    .constant('endpoints', {
        server: 'http://localhost:54982/', 
        zomatoApiEndPoint:'https://developers.zomato.com',
        cookApiEndPoint:'http://localhost:55925',
        
       htmlclient: 'http://localhost:55925', 
        services:{
            'userInfo':'/api/Account/UserInfo/' ,
            'cities':'/api/v2.1/cities?q=lisboa'  ,
            'offers':'/api/Offers'          
        }
        
    }) ;

})();
