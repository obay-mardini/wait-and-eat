(function() {
    'use strict'
    
    angular
        .module('app.auth')
        .controller('AuthController',AuthController);
    AuthController.$inject = ["$location","$firebaseAuth"]
    
   function AuthController($location, $firebaseAuth) {
       console.log($location)
       var vm = this;
       var firebaseAuthObject = $firebaseAuth();
       vm.user = {
           email: '',
           password: ''
       }
       
       vm.register = register;
       vm.login = login;
       vm.logout = logout;
       function register(user) {
           return firebaseAuthObject.$createUserWithEmailAndPassword(user.email, user.password).then(function() {
               vm.login(user)
           }).catch(function(err) {
               console.log('errrrrir   ' + err)
           })
       }
       
       function login(user) {
           return firebaseAuthObject.$signInWithEmailAndPassword(user.email, user.password).then(function(loggedInUser){
               console.log(loggedInUser);
               
               $location.path('/waitlist');
           }).catch(function(err) {
               console.log(err);
           });
       }
       
       function logout() {
           $location.path('/');
           firebaseAuthObject.$signOut();
       }
   }
})();