(function() {
    'use strict'
    
    angular
        .module('app.waitList')
        .controller('waitListController',waitListController);
    
    waitListController.$inject = ['textMessageService','partyService','user'];
    
    function waitListController(textMessageService, partyService, user) { 
        var vm = this;   
       
        vm.removeParty = removeParty;
        vm.sendTextMessage = sendTextMessage;   
        vm.parties = partyService.getPartyByUser(user.uid)
        vm.toggleDone = toggleDone;
        
        function removeParty(party) {
            vm.parties.$remove(party);
        }
        
        function sendTextMessage(party) {
            textMessageService.sendTextMessage(party, vm.parties)
        }
        
        function toggleDone(party) {
            vm.parties.$save(party);
        }
    }
})();