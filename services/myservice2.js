var app = angular.module('myApp', []);

// create a custome service: e.g creatig a service that converts given number to hexadecimal
app.service('hexafy', function() {
    this.myFunc = function (x) {
        return x.toString(16);
    }
});

app.filter('myFormat', ['hexafy', function(hexafy) {
    return function(x) {
        return hexafy.myFunc(x);
    };
}]);

// use the custome service to convert numbers into hexadecimal
app.controller('myCtrl2', function($scope) {
    $scope.counts = [255, 251, 200];
});