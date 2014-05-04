angular.module('sample1.controller.collections', [
    'ngRoute',
    'sample1.model.collections'
]).controller("Collections", function($scope, Collections) {

    //All Collections List from MongoDB
    Collections.list(function(collections) {
        $scope.collections = collections;
        $scope.collection = _.head(collections);
    });

    $scope.getCollection = function(key) {
        //target collection name
        $scope.collection = Collections.get(key);
    };
});
