angular.module('sample1.controller.modal', [
    'ngRoute',
    'sample1.model.modal'
]).controller("Modal", function($scope, Modal) {
    $scope.modal = Modal.get();
});
