var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("http://angular.test/welcome3.php")
    .then /* handling success*/ (function(response) {
        $scope.content = response.data;
        $scope.statuscode = response.status;
        $scope.statustext = response.statusText;
    }, /* handling error */ function(response) {
        $scope.content = "Something went wrong";
        $scope.statuscode = response.status;
        $scope.statustext = response.statusText;
    });
});