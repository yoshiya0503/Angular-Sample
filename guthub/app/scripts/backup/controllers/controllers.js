var app = angular.module('guthub', [ 'ngRoute', 'guthub.directives', 'guthub.services']);

app.controller('ListCtrl', ['$scope', 'recipes', function($scope, recipes) {
    $scope.recipes = recipes;
}]);

app.controller('ViewCtrl', ['$scope', '$location', 'recipe', function($scope, $location, recipe) {
    $scope.recipe = recipe;

    $scope.edit = function() {
        $location.path('/edit/' + recipe.id);
    };
}]);

app.controller('EditCtrl', ['$scope', '$location', 'recipe', function($scope, $location, recipe) {
    $scope.recipe = recipe;

    $scope.save = function() {
        $scope.recipe.$save(function(recipe) {
            $location.path('/view/', recipe.id);
        });
    };

    $scope.remove = function() {
        delete $scope.recipe;
        $location.path('/');
    };
}]);

app.controller('NewCtrl', ['$scope', '$location', 'Recipe', function($scope, $location, Recipe) {
    $scope.recipes = new Recipe({
        ingredients: [{}]
    });

    $scope.save = function() {
        $scope.recipe.$save(function(recipe) {
            $location.path('/view/', recipe.id);
        });
    };
}]);

app.controller('IngredientsCtrl', ['$scope', function($scope) {
    $scope.addIngredients = function() {
        var ingredients = $scope.recipe.ingredients;
        ingredients[ingredients.length] = {};
    };

    $scope.removeIngredients = function(index) {
        $scope.recipe.ingredients.splice(index, 1);
    };
}]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        resolve: {
            recipes: function(MultiRecipeLoader) {
                return MultiRecipeLoader();
            }
        },
        templateUrl: 'views/list.html'
    })
    .when('/edit/:recipeId', {
        controller: 'EditCtrl',
        resolve: {
            recipe: function(RecipeLoader) {
                return RecipeLoader();
            }
        },
        templateUrl: 'views/recipeForm.html'
    })
    .when('/view/:recipeId', {
        controller: 'ViewCtrl',
        recolve: {
            recipe: function(RecipeLoader) {
                return RecipeLoader();
            }
        },
        templateUrl: '/views/viewRecipe.html'
    })
    .when('/new', {
        controller: 'NewCtrl',
        templateUrl: 'views/recipeForm.html'
    })
    .otherwise({redirectTo: '/'});
}]);
