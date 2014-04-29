angular.module('sample1.controller.list', [
    'ngRoute',
    'sample1.model.list'
]).controller("List", function($scope, List) {
    var head = _.head(List.get());
    var keys = _.keys(head);
    $scope.keys = keys;
    $scope.values = List.get();
});
