var app = angular.module('myApp', []);
// using the built-in $location service to get the absolute url or a webpage
app.controller('myCtrl', function($scope, $location) {
    $scope.myUrl = $location.absUrl();
});