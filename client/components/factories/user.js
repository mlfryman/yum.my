(function(){
  'use strict';

  angular.module('yum.my')
  .factory('User', ['$http', function($http){

    function register(user){
      return $http.post('/register');
    }

    return {register:register};
  }]);
})();


