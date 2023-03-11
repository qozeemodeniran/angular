var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.count=0;
    $scope.addFunction = function() {
        $scope.count++;
    }
    $scope.minusFunction = function() {
        $scope.count--;
    }
});