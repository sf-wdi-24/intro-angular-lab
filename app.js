var app = angular.module('movieApp', []);
app.controller('MovieCtrl', ['$scope', function($scope) {
	$scope.moviesToWatch = [
		{
			title: "Revenant",
			year: 2015,
			poster: "https://s-media-cache-ak0.pinimg.com/736x/08/5d/03/085d03068aa497f3bb9bf2a3d0babc6c.jpg"
		},
		{
			title: "Antman",
			year: 2015,
			poster: "http://41.media.tumblr.com/5914580214f9f7686bd8d2b718a0a962/tumblr_nnxu5pMOJM1tumb9ao1_500.jpg"
		},
		{
			title: "Avengers: Age of Utron",
			year: 2015,
			poster: "http://thefilmstage.com/wp-content/uploads/2015/04/pp052015_avengers202.jpg"
		},
		{
			title: "Agent 47",
			year: 2015,
			poster: "http://40.media.tumblr.com/0eee1678d27e6575e7b4c9eac0d49e40/tumblr_nszhmgdL6m1ri74e4o3_500.jpg"
		}
	];
}]);