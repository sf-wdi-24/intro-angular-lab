var movieApp = angular.module('movieApp',[]);

movieApp.controller('moviesToWatch', ['$scope', function($scope) {
  $scope.moviesToWatch = [
  	{
  		title: 'Moovie 1'
  	},

   	{
  		title: 'Moovie 2'
  	},

  	  	{
  		title: 'Moovie 3'
  	},

  	  	{
  		title: 'Moovie 4'
  	},

  	  	{
  		title: 'Moovie 5'
  	},


  ];
}]);


$scope.movie = {};
$scope.addMovie = function(){
	var newMovie = $scope.movie;
	$scope.movie = {};
	$scope.moviesToWatch.push(newMovie);
};


