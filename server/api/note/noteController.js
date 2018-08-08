const Model = require('./noteModel');
const _ = require('lodash');
const logger = require('../../util/logger');

exports.params = function(req, res, next, id) {
  if(isNaN(id)) {
    next(new Error('Id should be numeric'));
  }

  Model.find(id, function(err, row){
    if (err) {
      logger.log(err);
      next(err);
    } else {
      req.note = row;
      next();
    }
  });
};

exports.index = function(req, res, next) {
  Model.all(function(err, rows){
    if (err) {
      logger.log(err);
      res.send({ 'satus': 0, 'error': err });
    } else {
      res.json(rows);
    }
  });
};

exports.edit = function(req, res, next) {
  var note = req.note;

  if (typeof note !== 'undefined' && note.length <= 0) {
    res.send({ 'satus': 0, 'error': "Record not found" });
  }

  res.send({ 'satus': 1, 'data': note[0], 'error': null });
};

exports.update = function(req, res, next) {
  var note = req.note;

  var update = _.merge(note, req.body);

  Model.update(req.params.id, update, function(err, row){
    if (err) {
      logger.log(err);
      res.send({ 'satus': 0, 'error': err });
    } else {
      res.send({ 'satus': 1, 'data': row, 'error': null });
    }
  });
};

exports.store = function(req, res, next) {
  var note = req.body;

  Model.insert(note, function(err, count){
    if (err) {
      logger.log(err);
      res.send({ 'satus': 0, 'error': err });
    } else {
      res.send({ 'satus': 1, 'error': null });
    }
  });
};

exports.delete = function(req, res, next) {
  Model.delete(req.params.id, function(err, row){
    if (err) {
      logger.log(err);
      res.send({ 'satus': 0, 'error': err });
    } else {
      res.send({ 'satus': 1, 'data': row, 'error': null });
    }
  });
};
