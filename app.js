
var app = angular.module('myApp', []);
app.controller('newsCtrl', function($scope, $http) {
    $http.get("http://localhost:2500/api/patient")
    .then(function (response) {$scope.names = response.data.records;});
});