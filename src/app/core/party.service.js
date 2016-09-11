(function() {
  'user strict'  
  
  angular
    .module('app.core')
    .factory('partyService', partyService)
  
  partyService.$inject = ['$firebaseArray', 'firebaseDataService']
  function partyService($firebaseArray, firebaseDataService) {
      //return object to be injected by the service
      
      //firebaseDataService return firebase instance at the root level
      //those instance takes a child method 
      var service = {
          Party: Party,
          parties: $firebaseArray(firebaseDataService.root.child('parties'))
      };
      return service;
      /////////
      
      function Party() {
            this.name = '';
            this.phone = '';
            this.size = '';
            this.done = false;
            this.notified = false;
      }
  }
})()