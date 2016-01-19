var app = angular.module('introAngularLabApp', []);

app.controller('MoviesCtrl', ['$scope', function ($scope){
	$scope.moviesToWatch = [
		{
			title: "Rocky",
			year: 1975
		},
		{
			title: "Rambo",
			year: 1985
		},
		{
			title: "Terminator",
			year: 1979
		}
	];
}]);