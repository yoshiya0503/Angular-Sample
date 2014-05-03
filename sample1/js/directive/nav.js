angular.module('sample1.directive.nav', [
    "sample1.controller.collections"
]).directive('nav', function() {
    return {
        restrict: 'EA',
        transclude: true,
        templateUrl: 'js/directive/nav.html'
    };
});
