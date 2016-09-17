(function() {
    'use strict'
    
    angular
        .module('app.waitList')
        .controller('waitListController',waitListController);
    
    waitListController.$inject = ['textMessageService','partyService','user'];
    
    function waitListController(textMessageService, partyService, user) { 
        var vm = this; 
        
        vm.parties = partyService.getPartyByUser(user.uid)  
    }
})();