'use strict';

var Bookmark = require('../models/bookmark');

exports.create = function(req, res){
  req.body.userId = req.user._id;
  Bookmark.create(req.body, function(err, bookmark){
    res.send({bookmark:bookmark});
  });
};

exports.index = function(req, res){
  Bookmark.all(req.user._id, function(err, bookmarks){
    res.send({bookmarks:bookmarks});
  });
};

