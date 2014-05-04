angular.module('sample1.model.modal', [
    'ngRoute'
]).factory('Modal', function($http) {
    var url = 'http://localhost:8080/document';
    return {
        get: function(col, _id, callback) {
            var query = '?col=' + col + '&_id=' + _id;
            $http.get(url + query).success(function(result) {
                callback(result);
            });
        }
    };
});
