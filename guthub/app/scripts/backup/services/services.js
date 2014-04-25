var services = angular.module('guthub.services', ['ngResource']);

services.factory('Recipe', ['$resource', function($resource) {
    return $resource('/recipes/:id', {id: '@id'});
}]);

services.factory('MultiRecipeLoader', ['Recipe', '$q', function(Recipe, $q) {
    return function() {
        var delay = $q.defer();
        Recipe.query(function(recipes) {
            delay.resolve(recipes);
        }, function() {
            delay.reject('レシピの取得に失敗しました');
        });
        return delay.promise;
    };
}]);

services.factory('RecipeLoader', ['Recipe', '$route', '$q', function(Recipe, $route, $q) {
    return function() {
        var delay = $q.defer();
        Recipe.get({id: $route.current.params.recipeId}, function(recipes) {
            delay.resolve(recipes);
        }, function() {
            delay.reject('レシピの取得に失敗しました:' + $route.current.params.recipeId);
        });
        return delay.promise;
    };
}]);
