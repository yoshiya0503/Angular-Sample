angular.module('sample1.model.list', [
    'ngRoute'
]).factory('List', function($http) {
    var ret = _.times(10, function(i) {
        return {
            _id: i,
            name: 'hoge' + i,
            time: Date.now()
        };
    });
    return {
        get: function() {
            return ret;
        }
    }
});
