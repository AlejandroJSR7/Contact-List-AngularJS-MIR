(function() {
  'use strict';
  angular
    .module('ContactsListApp', ['ngRoute', 'firebase'])
      .config(routeConfig);
    
    routeConfig.$inject = ['$routeProvider', '$locationProvider'];
    function routeConfig($routeProvider, $locationProvider) {
      var contactsListHome = { controller: 'ContactsListCtrl', controllerAs: 'contactsListVM', templateUrl: 'views/contacts-list.html' };
      var contactAddNew = { controller: 'ContactAddNewCtrl', controllerAs: 'contactAddNewVM', templateUrl: 'views/contact-add-new.html' };
      var contactDetails = { controller: 'ContactDetailsCtrl', controllerAs: 'contactDetailsVM', templateUrl: 'views/contact-details.html' };
      var contactEdit = { controller: 'ContactEditCtrl', controllerAs: 'contactEditVM', templateUrl: 'views/contact-edit.html' };
      $locationProvider.hashPrefix('');
      $routeProvider
        .when('/', contactsListHome)
        .when('/add-new-contact', contactAddNew)
        .when('/contact-details/:contactID', contactDetails)
        .when('/contact-edit/:contactID', contactEdit)
        .otherwise({
          redirectTo: '/'
        });
    }
})();