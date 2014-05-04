angular.module('sample1.controller.modal', [
    'ngRoute',
    'sample1.model.modal'
]).controller("Modal", function($scope, Modal) {

    $scope.getDocument = function(doc) {
        Modal.get($scope.collection, doc._id, function(result) {
            $scope.document = result;
        });
    };
});
