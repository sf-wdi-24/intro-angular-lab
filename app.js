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
		},
		{
			title: "Terminator 2",
			year: 1981
		},
		{
			title: "Terminator 3",
			year: 1983
		},
		{
			title: "Pokemon",
			year: 1999
		}
	];
	$scope.addMovie = function() {
		$scope.moviesToWatch.push($scope.newMovie);
		$scope.newMovie = {};
	};
	$scope.deleteMovie = function(removedMovie) {
		$scope.moviesToWatch.splice($scope.moviesToWatch.indexOf(removedMovie),1);
	};
}]);