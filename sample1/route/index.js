/**
 * @fileoverview controller
 * @name index.js
 * @author Yoshiya Ito <ito_yoshiya@cyberagnet.co.jp>
 */
var mongo = require('../lib');
var async = require('async');
var _ = require('lodash');

//TODO in the future using webscoket and socketIO and redis

/**
 * GET method
 * @method collections
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
exports.collections = function(req, res, next) {
    mongo.getCollections(function(err, result) {
        if (err) {
            return res.send(err);
        }
        res.send(result);
    });
};

/**
 * GET method
 * @method list
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
exports.list = function(req, res, next) {
    var col = req.query.col || 'Boss';
    mongo.list(col, function(err, result) {
        if (err) {
            return res.send(err);
        }
        res.send(result);
    });
};

/**
 * GET method
 * @method get
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
exports.get = function(req, res, next) {
    var _id = req.query._id || null; 
    var col = req.query.col || null;
    mongo.get(col, _id, function(err, result) {
        if (err) {
            return res.send(err);
        }
        res.send(result);
    });
};

/**
 * POST method
 * @method post
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
exports.post = function(req, res, next) {
    var col = req.body.col || null; 
    var doc = req.body.doc || null;
    var query = {
        _id : doc && doc._id || null
    };
    var update = _.omit(doc, '_id');

    mongo.upsert(col, query, update, function(err, reuslt) {
        if (err) {
            return res.send(err);
        }
        res.send(reuslt);
    });
};
