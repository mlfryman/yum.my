// HTTP Interceptor Factory - will intercept every http response & evaluate it.
(function(){
  'use strict';

  angular.module('yum.my')
  .factory('HttpInterceptor', ['$rootScope', '$location', '$q', function($rootScope, $location, $q){

    function responseError(res){
      if(res.status === 401){
        $location.path('/login');
      }

      return $q.reject(res);
    }

    function response(res){
      var email = res.headers('x-authenticated-user');
      if(email){
        $rootScope.$broadcast('authenticated', email); // any child of this can be listening
      }
      return res;
    }

    return {response:response, responseError:responseError};
  }]);
})();
