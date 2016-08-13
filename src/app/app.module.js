(function() {
    'use strict'
    
   angular.module("app", [
    'ngRoute',
    'firebase',
    //custom modules.
    'app.landing',
       'app.waitList'
   ]); 
    
})();
