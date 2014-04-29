angular.module('sample1', [
    "sample1.controller.collections"
]).directive('nav', function() {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: 'js/directive/nav.html'
    };
});
