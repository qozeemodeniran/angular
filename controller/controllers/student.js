var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
    $scope.firstname = "Qozeem";
    $scope.lastname = "Odeniran";
    $scope.fullName = function() {
        return $scope.firstname + " " + $scope.lastname;
    };

    $scope.major = "Computer Science";
    $scope.cgpa = "3.40";
})