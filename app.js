var app = angular.module("movies", []);

app.controller("moviesCtr", ["$scope", function($scope) {
    $scope.moviesToWatch=[
    {name: "Star Wars",
  	length: "120 min"},
    {name: "13 hours",
  	length: "115 min"},
    {name: "Ride Along",
  	length: "100 min"},
    {name: "Daddy's Home",
  	length: "110 min"},
    {name: "Norm of the North",
  	length: "90 min"},
    {name: "The Forest",
  	length: "134 min"},
    {name: "Sisters",
  	length: "124 min"},
    {name: "The 5th Wave",
  	length: "103 min"},
    {name: "Dirty Grandpa",
  	length: "80 min"},
    {name: "The Boy",
  	length: "130 min"}
    ];
    $scope.addMovie=function(){
    	$scope.moviesToWatch.push($scope.movie);
    	$scope.movie={};
    };
   	$scope.limit = 5;
		$scope.incrementLimit = function() {
    	$scope.limit = 10;
    	$scope.morebtn = true;
		};
		$scope.decrementLimit = function() {
		    $scope.limit = 5;
		    $scope.morebtn = false;

		};
		$scope.deleteMovie = function(movie){
				var movieToDelete =  $scope.moviesToWatch.indexOf(movie);
				$scope.moviesToWatch.splice(movieToDelete, 1);
		};
}]);