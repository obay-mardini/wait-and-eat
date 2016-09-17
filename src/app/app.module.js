(function() {
    'use strict'
    
   angular
       .module("app", [
        'ngRoute',
        'firebase',
        //custom modules.
        'app.waitList',
        'app.landing',
        'app.auth',
        'app.core',
        'app.layout'
       ])
        .config(configurationFunction);
   
    
    
    configurationFunction.$inject = ['$routeProvider'];
    
    function configurationFunction($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }
})();
    