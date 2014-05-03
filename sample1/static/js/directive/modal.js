angular.module('sample1.directive.modal', [
    'sample1.controller.modal'
]).directive('modal', function() {
    return {
        restrict: 'EA',
        transclude: true,
        templateUrl: 'js/directive/modal.html'
    };
});
