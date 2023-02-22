var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("http://angular.test/welcome.php").then(function (response) {
        $scope.welcome1 = response.data;
    });
});