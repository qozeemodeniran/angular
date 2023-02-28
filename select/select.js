var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.names = ["Qozeem", "Ahmed", "Jibril"];

    $scope.students = [
        {name: "Qozeem Odeiran", major: "IT"},
        {name: "Sodeeq Adesanya", major: "PSYC"},
        {name: "Tabitha Oyewole", major: "Language"},
        {name: "Hamed Sanusi", major: "Stats"}
    ];
});