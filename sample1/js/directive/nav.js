angular.module('sample1', [
    "sample1.model.collections",
    "sample1.controller.collections"
]).directive('nav', function() {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: 'js/directive/nav.html'
    };
});
/*
angular.module('sample1', [
    "sample1.collections"
]).controller("Collections", function($scope, Collections) {
    $scope.collections = Collections.get();
}).directive('nav', function() {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: 'js/directive/nav.html'
    };
});
*/
