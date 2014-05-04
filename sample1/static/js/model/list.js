angular.module('sample1.model.list', [
    'ngRoute'
]).factory('List', function($http) {
    var url = 'http://localhost:8080/list'; 
    return {
        get: function(col, callback) {
            $http.get(url + '?' + 'col=' + col).success(function(result) {
                callback(result);
            });
        }
    };
});
