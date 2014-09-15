'use strict';

var bcrypt = require('bcrypt'),
    Mongo  = require('mongodb');

function User(){
}

Object.defineProperty(User, 'collection', {
  get: function(){return global.mongodb.collection('users');}
});

User.findById = function(id, cb){
  var _id = Mongo.ObjectID(id);
  User.collection.findOne({_id:_id}, cb);
};

User.register = function(o, cb){ // o=req.body
  User.collection.findOne({email:o.email}, function(err, user){
    if(user || o.password.length < 4){return cb();}
    o.password = bcrypt.hashSync(o.password, 10);
    User.collection.save(o, cb);
  });
};

module.exports = User;
