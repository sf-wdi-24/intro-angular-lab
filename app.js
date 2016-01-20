var app = angular.module("introNg", []);

app.controller('MovieCtrl',['$scope', function($scope) {
	$scope.test = "Welcome to the himalayas";

	$scope.moviesToWatch = [
		{
			title: "Rush Hour",
			year: "1998",
			runtime: "1h 38m"

		},
		{
			title: "Drunken Master",
			year: "1978",
			runtime: "1h 51m"
		},
		{
			title: "Twin Dragons",
			year: "1992",
			runtime: "1h 40m"
		},
		{
			title: "Shanghai Noon",
			year: "2000",
			runtime: "1h 50m"
		},
		{
			title: "Rumble in the Bronx",
			year: "1995",
			runtime: "1h 47m"
		},
	];

	$scope.addMovie = function () {
		if (Object.keys($scope.movie).length === 3)  {
			$scope.moviesToWatch.push($scope.movie);
			$scope.movie = {};
		}
	};

	$scope.deleteMovie = function () {
		var movieIndex = $scope.moviesToWatch.indexOf(movie);
	};
}]);