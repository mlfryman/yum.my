'use strict';

var async    = require('async'),
    Category = require('./category');

function Bookmark(o){
  this.name       = o.name;
  this.url        = o.url;
  this.userId     = o.userId;
  this.categoryId = o.categoryId;
  this.created    = new Date();
}

Object.defineProperty(Bookmark, 'collection', {
  get: function(){return global.mongodb.collection('bookmarks');}
});

Bookmark.all = function(userId, cb){
  Bookmark.collection.find({userId:userId}).toArray(function(err, bookmarks){
    async.map(bookmarks, addCategory, cb);
  });
};

Bookmark.create = function(o, cb){
  var b = new Bookmark(o);
  Bookmark.collection.save(b, function(err, bookmark){
    addCategory(bookmark, cb);
  });
};

module.exports = Bookmark;

// Private Helper Function
function addCategory(bookmark, cb){
  Category.findById(bookmark.categoryId, function(err, category){
    bookmark.category = category;
    cb(err, bookmark);
  });
}
