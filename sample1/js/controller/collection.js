/*
angular.module('sample1', [
    'ngRoute',
    'sample1.collections'
]).controller("Collections", ['$scope', 'Collections', function($scope, Collections) {
    console.log("controller")
    $scope.collections = Collections.get();
}]);
*/

angular.module('sample1.controller.collections', [
    'ngRoute',
    'sample1.model.collections'
]).controller("Collections", function($scope, Collections) {
    $scope.collections = Collections.get();
});

/*
app.config(['$routeProvider', function($routeProvider) {
$routeProvider
.when('/', {
    controller: 'Collections',
    resolve: {
    }
})
}]);
*/
