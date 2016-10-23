(function() {
    'use strict'
    
    angular
        .module('app.waitList')
        .config(configFunction);
    
    configFunction.$inject = ['$routeProvider'];
    
    function configFunction($routeProvider) {
        $routeProvider.when('/waitList', {
            templateUrl: 'app/waitList/waitList.html',
            controller: 'waitListController',
            controllerAs: 'vm',
            resolve: {user: resolveUser}
        });
        
    }
    resolveUser.$inject = ['authService'];
    //this function returns a promise, if the promise's rejected so it will braodcast a routechange error with type auth required
    function resolveUser(authService) {
        return authService.firebaseAuthObject.$requireSignIn();
    }
})();