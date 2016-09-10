(function() {
    'use strict'
    
    angular
        .module('app.waitList')
        .controller('waitListController',waitListController);
    
    waitListController.$inject = ['$firebaseArray'];
    
    function waitListController($firebaseArray) {      
        var vm = this;   
        console.log(firebase.database)
        var fireParties = firebase.database().ref('parties');
        var fireTextMessages = firebase.database().ref('textMessages');
        function Party() {
            this.name = '';
            this.phone = '';
            this.size = '';
            this.done = false;
            this.notified = false;
        }
        
        vm.newParty = new Party();
        vm.addParty = addParty;
        vm.removeParty = removeParty;
        vm.sendTextMessage = sendTextMessage;   
        vm.parties = $firebaseArray(fireParties);
        vm.toggleDone = toggleDone;
        
        function addParty() {
            vm.parties.$add(vm.newParty);
            vm.newParty = new Party();
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
            vm.partied.$save(party)
        }
        
        function toggleDone(party) {
            vm.parties.$save(party);
        }
    }
})();