(function(){
  'use strict';
//creates the yum.my module
  angular.module('yum.my', ['ngRoute', 'LocalForageModule'])
  .config(['$routeProvider', '$httpProvider', '$localForageProvider', function($routeProvider, $httpProvider, $localForageProvider){
    $routeProvider
    .when('/', {templateUrl:'/views/home/home.html', controller:'HomeCtrl'})
    .when('/register', {templateUrl:'/views/register/register.html', controller:'RegisterCtrl'})
    .when('/login', {templateUrl:'/views/login/login.html', controller:'LoginCtrl'})
    .when('/logout', {templateUrl:'/views/logout/logout.html', controller:'LogoutCtrl'})
    .when('/bookmarks', {templateUrl:'/views/bookmarks/bookmarks.html', controller:'BookmarksCtrl'})
    .when('/categories', {templateUrl:'/views/categories/categories.html', controller:'CategoriesCtrl'})
    .otherwise({redirectTo:'/'});
    // configure providers
    $httpProvider.interceptors.push('HttpInterceptor'); // interceptor is now part of the yum.my module & will intercept every single response
    $localForageProvider.config({name:'yummy', storeName:'cache', version:1.0});
  }]);
})();

