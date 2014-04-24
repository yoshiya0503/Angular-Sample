var service = angular.module('guthub.service', ['ngResource']);

service.factory('Recipe', ['$resource', function($resource) {
    return $resource('/recipes/:id', {id: '@id'});
}]);

service.factory('MultiRecipeLoader', ['Recipe', '$q', function(Recipe, $q) {
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

service.factory('RecipeLoader', ['Recipe', '$route', '$q', function(Recipe, $route, $q) {
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
