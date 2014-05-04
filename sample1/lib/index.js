/**
 * @fileoverview mongoDB service 
 * @name index.js
 * @author Yoshiya Ito <ito_yoshiya@cyberagnet.co.jp>
 */

var mongoskin = require('mongoskin');
var async = require('async');
var _ = require('lodash');

var db = mongoskin.db("mongodb://localhost:27017/sample1", {native_parser:true});

/**
 * get all collection names
 * @method getCollections
 * @param {Function} callback
 */
exports.getCollections = function(callback) {

    //get collection names
    db.collectionNames(function(err, list) {
        if (err) {
            return callback(err);
        }
        callback(null, {
            names: _.pluck(list, 'name')
        });
    });
};

/**
 * get all document of target collections
 * @method list
 * @param {String} col
 * @param {Function} callback
 */
exports.list = function(col, callback) {

    //get target collection
    var collection = db.collection(col);

    collection.find({}).toArray(function(err, result) {
        if (err) {
            return callback(err);
        }
        callback(null, result);
    });
};

/**
 * get document
 * @method get
 * @param {String} _id
 * @param {Function} callback
 */
exports.get = function(col, _id, callback) {

    var collection = db.collection(col);
    collection.findOne({_id: _id}, function(err, result) {
        if (err) {
            return callback(err);
        }
        callback(null, result);
    });
};

/**
 * upsert document
 * @method upsert
 * @param {String} col
 * @param {Object} query
 * @param {Object} update
 * @param {Function} callback
 */
exports.upsert = function(col, query, update, callback) {
    var collection = db.collection(col);

    collection.update(query, {$set: update}, {upsert: true, safe: true}, function(err, result) {
        if (err) {
            return callback(err);
        }
        callback(null, result);
    });
};
