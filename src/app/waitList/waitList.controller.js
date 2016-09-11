(function() {
    'use strict'
    
    angular
        .module('app.waitList')
        .controller('waitListController',waitListController);
    
    waitListController.$inject = ['textMessageService','partyService','user'];
    
    function waitListController(textMessageService, partyService, user) { 
        var vm = this;   
        vm.newParty = new partyService.Party();
        vm.addParty = addParty;
        vm.removeParty = removeParty;
        vm.sendTextMessage = sendTextMessage;   
        vm.parties = partyService.parties;
        vm.toggleDone = toggleDone;
        
        console.log(user)
        
        function addParty() {
            vm.parties.$add(vm.newParty);
            vm.newParty = new partyService.Party();
        }
        
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