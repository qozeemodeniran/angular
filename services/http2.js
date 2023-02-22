var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http({
        method : "GET",
        url : "http://angular.test/welcome2.php"
    }).then(function passed(response) {
        $scope.welcome = response.data;
    }, function failed(response) {
        $scope.welcome = response.statusText;
    });
});
