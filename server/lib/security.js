'use strict';

var User = require('../models/user');

exports.authenticate = function(req, res, next){
  User.findById(req.session.userId, function(err, user){
    req.user = user;
    res.setHeader('X-Authenticated-User', user ? user.email : 'anonymous'); // does user exist? if yes, show user.email; if not, show anonymous
    next();
  });
};
