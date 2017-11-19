(function() {
  'use strict';

  function ContactListCtrl() {
    var contactListVM = this;

    contactListVM.msg = 'Hello World';

  }

  angular
    .module('contactListApp')
      .controller('ContactListController', ContactListCtrl);
})();