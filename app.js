var app = angular.module('movieApp', []); 

app.controller('MainCtrl', ['$scope', function ($scope) {
	$scope.movies = "Pick Your Flick!"; 

		$scope.moviesToWatch = [
			{
				name: "The 5th Wave"
			},
			{
				name: "The Boy"
			}, 
			{
				name: "Dirty Grandpa"
			}, 
			{
				name: "Ip Man 3 "
			}, 
			{
				name: "Exposed"
			}, 
			{
				name: "Monster Hunt"
			}, 
			{
				name: "Martyrs"
			}, 
			{
				name: "Terminus"
			}, 
			{
				name: "Synchronicity"
			}, 
			{
				name: "Miles"
			}, 
			{
				name: "Rabid Dogs"
			}, 
			{
				name: "Trapped" 
			}
]; 

}]); 
