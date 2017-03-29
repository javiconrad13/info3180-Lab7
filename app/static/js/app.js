// Your JavaScript Code here
var app = angular.module('MyApp', []);
app.controller('MainController', function($scope, $http){
	$http.get("/api/thumbnails").then(function(response){
		$scope.thumbnails = response.data.thumbnails
	})
})