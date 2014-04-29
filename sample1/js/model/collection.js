/*
angular.module('sample1.collections', [
    'ngRoute'
]).factory('Collections', ['$http', function($http) {
    console.log('model')
    return {
        get: function() {
            return {
                game: "game",
                user: "user",
                stage: "stage",
                boss: "boss"
            };
        }
    }
}]);
*/
angular.module('sample1.model.collections', [
    'ngRoute'
]).factory('Collections', function($http) {
    console.log('model')
    return {
        get: function() {
            return {
                game: "game",
                user: "user",
                stage: "stage",
                boss: "boss"
            };
        }
    }
});
