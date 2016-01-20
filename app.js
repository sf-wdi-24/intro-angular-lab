(function(){

var app = angular.module('movieApp', []);

	app.controller('MovieCtrl', ['$scope', function($scope){
		$scope.moviesToWatch =[
		{
			name: "John Wick"
		},
		{
			name: "The Green Mile"
		},
		{
			name: "The Intouchables"
		},
		{
			name: "Creed"
		}];

		$scope.createMovie = function(){
			$scope.moviesToWatch.push($scope.newMovie);
			$scope.newMovie = {};
			$scope.newMovieForm = false;
		};
	}]);
})();