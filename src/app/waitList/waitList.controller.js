(function() {
  'use strict';

 angular.module('app.waitList').controller('WaitListController',WaitListController);
    
    WaitListController.$inject = ['$firebaseArray']

  function WaitListController($firebaseArray) {
      
      function Party() {
          this.name = '';
          this.phone = '';
          this.size = '';
          this.done = false;
          this.notified = false;
      }
      var vm = this;
     
      var fireParties = firebase.database().ref('parties');
      
      vm.parties =  $firebaseArray(fireParties);
      vm.newParty = new Party();
      function addParty() {
          vm.parties.$add(vm.newParty);
          vm.newParty = new Party();
      }
      
      vm.addParty = addParty;
      
  }
   
})();