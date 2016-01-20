var app = angular.module('movieApp', []);

app.controller('MovieCtrl', ['$scope', function ($scope) {
	$scope.moviesToWatch = [

		{
			title: 'The Martian',
			image: 'http://ia.media-imdb.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SY317_CR0,0,214,317_AL_.jpg'
		},
		{
			title: 'San Andreas',
			image: 'http://ia.media-imdb.com/images/M/MV5BNjI4MTgyOTAxOV5BMl5BanBnXkFtZTgwMjQwOTA4NTE@._V1_SX214_AL_.jpg'
		},
		{
			title: 'The Force Awakens',
			image: 'http://ia.media-imdb.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY317_CR0,0,214,317_AL_.jpg'
		},
		{
			title: 'Joy',
			image: 'http://ia.media-imdb.com/images/M/MV5BMzc2MTI5Mzk0MV5BMl5BanBnXkFtZTgwMDIxMDg1NjE@._V1_SX214_AL_.jpg'
		},
		{
			title: 'The Hateful Eight',
			image: 'http://ia.media-imdb.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_SX214_AL_.jpg'
		}
	];

	$scope.addMovie = function() {
		$scope.moviesToWatch.push($scope.addMovie);
	};

	$scope.deleteMovie = function(movie) {
		var movieIndex = $scope.moviesToWatch.indexOf(movie);
		$scope.moviesToWatch.splice(movieIndex, 1);
	};
	}]);