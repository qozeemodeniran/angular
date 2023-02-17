var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $timeout) {
    $scope.header = "Hey There!";
    $timeout(function () {
        $scope.header = "How are you doing?";
    }, 3000);
});