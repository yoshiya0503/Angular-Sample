app.controler('ListCtrl', ['$scope', 'recipes', function($scope, recipes) {
    $scope.recipes = recipes;
}]);

app.controler('ViewCtrl', ['$scope', '$location', 'recipe', function($scope, $location, recipe) {
    $scope.recipe = recipe;

    $scope.edit = function() {
        $location.path('/edit/' + recipe.id);
    };
}]);

app.controler('EditCtrl', ['$scope', '$location', 'recipe', function($scope, $location, recipe) {
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

app.controler('NewCtrl', ['$scope', '$location', 'Recipe', function($scope, $location, Recipe) {
    $scope.recipes = new Recipe({
        ingredients: [{}]
    });

    $scope.save = function() {
        $scope.recipe.$save(function(recipe) {
            $location.path('/view/', recipe.id);
        });
    };
}]);

app.controler('IngredientsCtrl', ['$scope', function($scope) {
    $scope.addIngredients = function() {
        var ingredients = $scope.recipe.ingredients;
        ingredients[ingredients.length] = {};
    };

    $scope.removeIngredients = function(index) {
        $scope.recipe.ingredients.splice(index, 1);
    };
}]);

