var app = angular.module('movieApp', []);
app.controller('MovieCtrl', ['$scope', function($scope) {
	$scope.moviesToWatch = [
		{
			title: "The Revenant",
			year: 2016,
			picture: "https://fanart.tv/fanart/movies/281957/moviebackground/the-revenant-56696620a2821.jpg"
		},
		{
			title: "Ant Man",
			year: 2015,
			picture: "https://events.ucsb.edu/wp-content/uploads/2015/09/Marvel-Ant-Man-Banner-Poster.jpg"
		},
		{
			title: "Avengers: Age of Utron",
			year: 2015,
			picture: "http://oi57.tinypic.com/28bfu3a.jpg"
		},
		{
			title: "Agent 47",
			year: 2015,
			picture: "http://images8.alphacoders.com/614/614163.jpg"
		},
		{
			title: "The Martian",
			year: 2015,
			picture: "http://s3.foxfilm.com/foxmovies/production/films/104/images/gallery/martian-gallery3-gallery-image.jpg"
		},
		{
			title: "Creed",
			year: 2015,
			picture: "http://totalrocky.com/films/creed-2015/ucwzuno3i1xbdo3dkucv.jpg"
		}
	];
	$scope.addMovie = function() {
		$scope.moviesToWatch.push($scope.newMovie);
		$scope.newMovie = {};
	};
	$scope.movieLimitFive = true;
	$scope.toggleMovieLimit = function() {
		if ($scope.movieLimitFive) {
			$scope.movieLimitFive = false;
		} else {
			$scope.movieLimitFive = true;
		}
	};
	$scope.deleteMovie = function(movie) {
		movieToBeDeleteIndex = $scope.moviesToWatch.indexOf(movie);
		$scope.moviesToWatch.splice(movieToBeDeleteIndex, 1);
	};
	$scope.watchedMovie = function(movie) {
		movie.watched = movie.watched ? false : true;
		movie.watched ? movie.style = {"text-decoration" : "line-through"} : movie.style = {"text-decoration" : "none"};
	};
	$scope.changeBackground = function() {
    randomNum = Math.floor(Math.random() * $scope.moviesToWatch.length);
    randomPicture = $scope.moviesToWatch[randomNum].picture;
    $scope.background = {'background-image': 'url(' + randomPicture + ')'};
  };
}]);