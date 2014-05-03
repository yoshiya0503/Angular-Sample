angular.module('sample1.model.modal', [
    'ngRoute'
]).factory('Modal', function($http) {
    return {
        get: function() {
            return "server data";
        }
    }
});
