'use strict';

var Mongo = require('mongodb');

function Category(){
}

Object.defineProperty(Category, 'collection', {
  get: function(){return global.mongodb.collection('categories');}
});

Category.create = function(o, user, cb){
  o.userId = user._id;
  Category.collection.save(o, cb);
};

Category.all = function(user, cb){
  Category.collection.find({userId:user._id}).toArray(cb);
};

Category.findById = function(id, cb){
  id = Mongo.ObjectID(id);
  Category.collection.findOne({_id:id}, cb);
};

module.exports = Category;
