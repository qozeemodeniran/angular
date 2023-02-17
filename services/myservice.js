var app = angular.module('myApp', []);

// create a custome service: e.g creatig a service that converts given number to hexadecimal
app.service('hexafy', function() {
    this.myFunc = function (x) {
        return x.toString(16);
    }
});

// use the custome service 
app.controller('myCtrl', function($scope, hexafy) {
    $scope.hex = hexafy.myFunc(255);
});

app.filter('myFormat', ['hexafy', function(hexafy) {
    return function(x) {
        return hexafy.myFunc(x);
    };
}]);