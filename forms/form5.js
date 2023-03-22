var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.master = {name: "Qozeem Odeniran"};
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
});