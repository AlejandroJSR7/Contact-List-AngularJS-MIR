(function() {
  'use strict';
  angular
    .module('ContactsListApp')
      .controller('ContactAddNewCtrl', ContactAddNewCtrl);

    ContactAddNewCtrl.$inject = ['ContactAddNewService'];

    function ContactAddNewCtrl(contactAddNewService) {
      var contactAddNewVM = this;
      contactAddNewVM.saveContact = saveContact;

      contactAddNewVM.contact = {};

      function saveContact() {
        contactAddNewService.saveNewContact(contactAddNewVM.contact);
      }

    }

})();