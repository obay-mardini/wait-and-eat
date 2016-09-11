(function() {
    'use strict'
    
    angular
        .module('app.waitList')
        .controller('waitListController',waitListController);
    
    waitListController.$inject = ['partyService'];
    
    function waitListController(partyService) { 
        var vm = this;   

        var fireTextMessages = firebase.database().ref('textMessages');
        
        vm.newParty = new partyService.Party();
        vm.addParty = addParty;
        vm.removeParty = removeParty;
        vm.sendTextMessage = sendTextMessage;   
        vm.parties = partyService.parties;
        vm.toggleDone = toggleDone;
        
        function addParty() {
            vm.parties.$add(vm.newParty);
            vm.newParty = new partyService.Party();
        }
        
        function removeParty(party) {
            vm.parties.$remove(party);
        }
        
        function sendTextMessage(party) {
           var newTextMessage = {
               phoneNumber: party.phone,
               size: party.size,
               name: party.name
           }
           fireTextMessages.push(newTextMessage);
            party.notified = true;
            vm.parties.$save(party)
        }
        
        function toggleDone(party) {
            vm.parties.$save(party);
        }
    }
})();