(function() {
  'use strict';
  angular
    .module('zomatoApp')
    .config(configApp);

	
	function configApp ($stateProvider, $urlRouterProvider, globals){
		// catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/home');
	
  
    $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "/html/app/templates/homepage/hp.tpt.html",
             controller:'homeCtrl',
             controllerAs:'home'
    })
    .state('offers', {
      url: "/offers/{cityname}",
      templateUrl: "/html/app/templates/offers/offers.tpt.html",
             controller:'offersCtrl',
             controllerAs:'offers'
    })    
     ;
	
	}
	
})();
