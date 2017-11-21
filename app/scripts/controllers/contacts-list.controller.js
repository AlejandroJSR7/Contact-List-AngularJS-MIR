(function() {
  'use strict';
  angular
    .module('ContactsListApp')
      .controller('ContactsListCtrl', ContactsListCtrl);

  ContactsListCtrl.$inject = ['$scope'];
  function ContactsListCtrl($scope) {
    var contactsListVM = this;

    contactsListVM.hello = "HELLO WORLD";
  }
})();