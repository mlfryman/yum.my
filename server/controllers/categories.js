'use strict';

var Category = require('../models/cateogry');

exports.create = function(req, res){
  Category.create(req.body, req.user, function(err, category){
    res.send({category:category});
  });
};

exports.all = function(req, res){
  Category.all(req.user, function(err, categories){
    res.send({categories:categories});
  });
};
