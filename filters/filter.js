let app = angular.module("myApp", []);

   
// create custom filter
app.filter('myFilter', function() {
    return function(f) {
        var i, c, txt = "";
        for (i=0; i<f.length; i++) {
            c = f[i];
            if (i%2 == 0) {
                c = c.toUpperCase();
            }
            txt += c;
        }
        return txt;
    };
});

app.controller("myCtrl", function($scope) {
    $scope.firstname = "Qozeem";
    $scope.lastname = "Odeniran";
    $scope.major = "Information Technology";
    $scope.fullname = function() {
        return $scope.firstname + " " + $scope.lastname;
    }

    // create objects of data
    $scope.info = [
        {firstname: 'Douglas', lastname: 'Evana', major: 'IT', fees: 792},
        {firstname: 'Daniel', lastname: 'Denis', major: 'Criminology', fees: 400},
        {firstname: 'Sodeeq', lastname: 'Adesanya', major: 'Human Psychology', fees: 545},
        {firstname: 'Saint', lastname: 'Chris', major: 'IT', fees: 792},
        {firstname: 'Oliver', lastname: 'Twist', major: 'Criminology', fees: 400},
        {firstname: 'John', lastname: 'Doe', major: 'Human Psychology', fees: 545},
        {firstname: 'Ken', lastname: 'Amstrong', major: 'IT', fees: 792},
        {firstname: 'Shuan', lastname: 'Ben', major: 'Criminology', fees: 400},
        {firstname: 'Amaru', lastname: 'Shakur', major: 'Human Psychology', fees: 545}
    ];

    // create function to use to order list
    $scope.myOrder = function(student) {
        $scope.Orders = student;
    }
});