(function() {
  'use strict';

  angular
    .module('ContactsListApp')
      .factory('ContactAddNewService', ContactAddNewService);

    ContactAddNewService.$inject = ['$firebaseObject'];
    function ContactAddNewService($firebaseObject) {
      var contactAddNewVM = this;
      var thisService = {
        saveNewContact: saveNewContact
      };
      return thisService;

      
      function saveNewContact(newContact) {
        var contactsDatabase = firebase.database().ref('contacts/');

        console.log("DATABASE", contactsDatabase);
        console.log("service saveNewContact newContact", newContact);
        var contact_email = newContact.email_addres;

        contactsDatabase.orderByChild('email_addres')
          .equalTo(contact_email)
            .once('value', function(snapshot) {
              if (snapshot.hasChildren()) {
                alert("Ya existe un contacto con este Email");
              } else {
                contactsDatabase.push().set(newContact, function(error) {
                  if (error) {
                    console.log(error, 'La sincronización fallo.')
                  } else {
                    console.log('La sincronización ha sido exitosa.');
                  }
                });
              }
            });
      }
    }
})();