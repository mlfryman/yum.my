// Bookmarks controller

(function(){
  'use strict';

  angular.module('yum.my')
  .controller('BookmarksCtrl', ['$scope', '$location', 'Category', 'Bookmark', function($scope, $location, Category, Bookmark){

    $scope.filter = {};

    $scope.toggleCategory = function(){
      $scope.hideCategory = !!!$scope.hideCategory;
    };

    Category.all().then(function(response){
      $scope.categories = response.data.categories;
    });

    $scope.addCategory = function(){
      Category.create($scope.name).then(function(response){
        $scope.categories = $scope.categories || [];
        $scope.categories.push(response.data.category);
        $scope.name = '';
      });
    };

    Bookmark.all().then(function(response){
      $scope.bookmarks = response.data.bookmarks;
    });

    $scope.addBookmark = function(){
      Bookmark.create($scope.bookmark).then(function(response){
        $scope.bookmarks.push(response.data.bookmark);
        $scope.bookmark = {};
      });
    };

    $scope.filterBookmarks = function(categoryId){
      $scope.filtered = $scope.bookmarks.filter(function(bookmark){
        return bookmark.categoryId === categoryId;
      });
    };

    $scope.markActive = function(category){
      $scope.categories.forEach(function(category){
        category.isActive = false;
      });
    };

  }]);
})();
