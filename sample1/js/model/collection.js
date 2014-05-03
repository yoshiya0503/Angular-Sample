angular.module('sample1.model.collections', [
    'ngRoute'
]).factory('Collections', function($http) {
    return {
        list: function() {
            return {
                game: "game",
                user: "user",
                stage: "stage",
                boss: "boss"
            };
        },
        get: function(key) {
            var col = {
                game: "game",
                user: "user",
                stage: "stage",
                boss: "boss"
            };
            return col[key];
        }
    }
});
