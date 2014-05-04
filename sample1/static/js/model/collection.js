angular.module('sample1.model.collections', [
    'ngRoute'
]).factory('Collections', function($http) {
    var url = 'http://localhost:8080/collections';
    var collections;
    return {
        list: function(callback) {
            $http.get(url).success(function(result) {
                collections = result.names;
                callback(collections);
            });
        },
        get: function(key) {
            return _.find(collections, function(col) {
                return key === col;
            });
        }
    };
});
