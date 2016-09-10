(function() {
    'use strict'
    
   angular.module("app", [
    'ngRoute',
    'firebase',
    //custom modules.
    'app.waitList',
    'app.landing',
    'app.auth'
   ]); 
    
})();
    