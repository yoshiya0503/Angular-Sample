angular.module('sample1.directive.list', [
    "sample1.controller.list"
]).directive('list', function() {
    return {
        restrict: 'EA',
        replace: false,
        transclude: true,
        templateUrl: 'js/directive/list.html'
    };
});
