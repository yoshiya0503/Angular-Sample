angular.module('sample1.model.collections', [
    'ngRoute'
]).factory('Collections', function($http) {
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
