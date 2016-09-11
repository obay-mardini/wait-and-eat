(function() {
    'use strict'
    
    angular
        .module('app.auth')
        .controller('AuthController',AuthController);
    AuthController.$inject = ["$location","authService"]
    
   function AuthController($location, authService) {
       var vm = this;
       vm.user = {
           email: '',
           password: ''
       }
       
       vm.register = register;
       vm.login = login;
       vm.logout = logout;
       vm.isLoggedIn = authService.isLoggedIn;
       function register(user) {
           return authService.register(user).then(function() {
               vm.login(user)
           }).catch(function(err) {
               console.log('errrrrir   ' + err)
           })
       }
       
       function login(user) {
           return authService.login(user).then(function(loggedInUser){
               $location.path('/waitlist');
           }).catch(function(err) {
               console.log(err);
           });
       }
       
       function logout() {
           authService.logout();
           $location.path('/');
           
       }
   }
})();