var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $interval) {
    $scope.time = new Date().toLocaleTimeString();
    $interval(function () {
        $scope.time = new Date().toLocaleTimeString();
    }, 1000);
});