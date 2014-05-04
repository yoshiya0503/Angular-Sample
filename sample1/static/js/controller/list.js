angular.module('sample1.controller.list', [
    'ngRoute',
    'sample1.model.list'
]).controller("List", function($scope, List) {
    var head;
    var keys;

    //collection was cached in collections.js
    List.get($scope.collection, function(result) {
        head = _.head(result);
        keys = _.keys(head);
        $scope.keys = keys;
        $scope.values = result;
    });

    //data binding between collections and list
    function list() {
        List.get($scope.collection, function(result) {
            head = _.head(result);
            keys = _.keys(head);
            $scope.keys = keys;
            $scope.values = result;
        });
    }

    $scope.$watch('collection', list, false);
});
