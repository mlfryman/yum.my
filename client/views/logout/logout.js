(function(){
  'use strict';

  angular.module('yum.my')
  .controller('LogoutCtrl', ['$location', 'User', function($location, User){
    User.logout().then(function(){
      toastr.success('You are now logged out.');
      $location.path('/');
    });
  }]);
})();
