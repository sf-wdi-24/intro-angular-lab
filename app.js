var app = angular.module('movieApp', []);

app.controller('MovieCtrl', ['$scope', function ($scope) {
	$scope.moviesToWatch = [
		{	
			title: "Star Wars",
			image: "http://a.dilcdn.com/bl/wp-content/uploads/sites/6/2015/10/tfa_poster_wide_header-1536x864-959818851016.jpg"
		},
		{
			title: "Monty Python",
			image: "https://res.cloudinary.com/movielala/image/upload/v1436489221/559f0637776f726aa0000389.jpg"
		},
		{
			title: "Frozen", 
			image: "http://images6.fanpop.com/image/photos/36700000/Elsa-image-elsa-36759559-1366-768.jpg"
		},
		{
			title: "Blazing Saddles",
			image: "http://i.jeded.com/i/blazing-saddles.16193.jpg"
		},
		{
			title: "Space Jam",
			image: "http://wallpapershidef.com/wp-content/gallery/space-jam-wallpaper/Space+Jam+Wallpaper-704292.jpg"
		},
		{
			title: "The Walk",
			image: "http://www.entertainmentwallpaper.com/images/res1920x1080/movie/the-walk05.jpg"
		},
		{
			title: "Zoolander 2",
			image: "http://www.finalreel.co.uk/wp-content/uploads/2015/12/Zoolander-2-Poster-slice.jpg"
		}
	];

	$scope.addMovie = function() {
		$scope.moviesToWatch.push($scope.newMovie);
		$scope.newMovie = {};
	};

	$scope.removeMovie = function(movie) {
		var movieIndex = $scope.moviesToWatch.indexOf(movie);
		$scope.moviesToWatch.splice(movieIndex, 1);
	};

	$scope.moreTitles = function() {
		$scope.limit = $scope.moviesToWatch.length;
		$scope.allTitles = true;
	};

	$scope.changeBackground = function() {
		var num = Math.floor(Math.random() * $scope.moviesToWatch.length);
		console.log(num);
		backgroundImage = $scope.moviesToWatch[num].image;
		$scope.style = {'background-image':'url('+ backgroundImage +')'};
	};
	$scope.seenMovie = function() {
		$scope.seen = true;
	};
}]);