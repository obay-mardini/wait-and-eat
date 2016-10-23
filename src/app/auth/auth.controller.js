(function() {
    'use strict'
    
    angular
        .module('app.auth')
        .controller('AuthController',AuthController);
    AuthController.$inject = ["$location","authService"]
    
   function AuthController($location, authService) {
       var vm = this;
       
       vm.error = null;
       vm.register = register;
       vm.login = login;
       
       function register(user) {
           return authService.register(user).then(function() {
               vm.login(user)
           }).catch(function(error) {
               vm.error = error;
           })
       }
       
       function login(user) {
           return authService.login(user).then(function(loggedInUser){
               $location.path('/waitList');
           }).catch(function(error) {
               vm.error = error;
           });
       }

   }
})();