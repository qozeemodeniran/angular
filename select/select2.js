var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {

    // array datasource
    $scope.students = [
        {name: "Qozeem Odeiran", major: "IT"},
        {name: "Sodeeq Adesanya", major: "PSYC"},
        {name: "Tabitha Oyewole", major: "Language"},
        {name: "Hamed Sanusi", major: "Stats"}
    ];

    // object datasource
    $scope.developers = {
        dev1: "Qozeem Odeniran",
        dev2: "Bolade Dhizkrulah",
        dev3: "Aremu Azeez"
    };

    // nested object datasource
    $scope.professionals = {
        person1: {name : "Qozeem Odeniran", experience : "30", job : "Software Developer"},
        person2: {name : "Jibril Odeniran", experience : "15", job : "Aeronautic Engineer"},
        person3: {name : "Neema Odeniran", experience : "10", job : "Medical Doctor"}
    };
});