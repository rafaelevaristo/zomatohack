(function () {
    'use strict';

    /**
     * @name  config
     * @description config block
     */

app.controller("homeCtrl", ['$scope','zomatoDataService', 'cookDataService', 'globals','$state', function($scope, zomatoDataService, cookDataService, globals, $state) {
    
    var home = this;
    home.save = save;
    home.GetCities = GetCities;
    home.GetOffers = GetOffers;
    
    function GetOffers(city)
    {
        $state.go('^.offers', {cityname:city});
    };
    
    function GetCities()
    {
     
        zomatoDataService.GetData('cities').then( function(data)
              {
                 
                 
                 console.log('OK');
                 console.log(data);
                 
                 
                 //globals.toastr.info('Data Aqui.');
                  
                 
              },
              function(data)
              {
                
                 //globals.toastr.error('Erro na cena.');
                
                 console.log('error');
                 //console.log(data);
                 
              });   ;        
    };
       
    
    function save () {alert("Note Saved");
    
    
    };
}])
.controller("offersCtrl", ['$scope','zomatoDataService', 'cookDataService', 'globals', '$stateParams', function($scope, zomatoDataService, cookDataService, globals, $stateParams) {
    
    var offers = this;
    
    offers.cityName = $stateParams.cityname;
    
    offers.list = [];
    
    init();    
    
    function init(){        
        console.log(offers.cityName);        
        loadOffers(offers.cityName);        
    };
        
    function loadOffers(citiName)
    { 
        cookDataService.GetData('offers', 'q=' + citiName ).then( function(data)
              {
                 console.log('OK');
                 console.log(data);                
                 
                 offers.list = data;
                 //globals.toastr.info('Data Aqui.');
                 
                 console.log(offers.list);
                 
              },
              function(data)
              {                
                 //globals.toastr.error('Erro na cena.');                
                 console.log('error');
                 //console.log(data);
                 
              });   ;        
    };   
   
}]);
})();
