var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
    $scope.info = [
        {name: "Qozeem Odeniran", major: "Information Technology", country: "Nigeria"},
        {name: "John Doe", major: "Computer Science", country: "USA"},
        {name: "Rose Evans", major: "Mechanical Engineering", country: "Liberia"}
    ];
});