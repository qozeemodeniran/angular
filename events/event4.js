var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.show = false;
    $scope.showFunc = function() {
        $scope.show = !$scope.show;
    }
});