angular.module('sample1.controller.collections', [
    'ngRoute',
    'sample1.model.collections'
]).controller("Collections", function($scope, Collections) {
    $scope.collections = Collections.get();
});
