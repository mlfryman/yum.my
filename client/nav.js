// Nav controller

(function(){
  'use strict';
// find existing yum.my module
  angular.module('yum.my')
  .controller('NavCtrl', ['$scope', '$localForage', function($scope, $localForage){
    $localForage.getItem('email').then(function(email){ // happens when you refresh
      $scope.email = email;
    });

    $scope.$on('authenticated', function(event, email){ // listening to the message; once I receive it, I save it in browser's cache
      if(email === 'anonymous'){email = null;}
      $localForage.setItem('email', email).then(function(){
        $scope.email = email;
      });
    });
  }]);
})();
