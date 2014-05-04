angular.module('sample1.controller.list', [
    'ngRoute',
    'sample1.model.list'
]).controller("List", function($scope, List) {
    var head;
    var keys;

    List.get('Boss', function(result) {
        head = _.head(result);
        keys = _.keys(head);
        $scope.keys = keys;
        $scope.values = result;
    });
});
