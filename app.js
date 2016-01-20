//I. Create module...give it a name "app"
var app = angular.module('myApp', []);

//II. Controller
app.controller('MovieCtrl', ['$scope', function($scope) {
  $scope.welcome = 'Test :)';
  $scope.moviesToWatch = [
    {
      title: "Ex Machina",
      genre: "Action",
      year: "2015"
    },
    {
      title: "Ocean's 11",
      genre: "Action",
      year: "2000"
    },
    {
      title: "Burn After Reading",
      genre: "Comedy",
      year: "2008"
    },
    {
      title: "There Will Be Blood",
      genre: "Drama",
      year: "2007"
    },
    {
      title: "Magnolia",
      genre: "Drama",
      year: "2000"
    }  
  ];
  $scope.createMovie = function() {
    var newMovieAdd = $scope.newMovie;
    $scope.moviesToWatch.push(newMovieAdd);
    $scope.newMovie = {};
    $scope.newMovieForm = false;
  };

  $scope.deleteMovie = function(movie) {
    var movieIndex = $scope.movies.indexOf(movie);
    $scope.movies.splice(movieIndex, 1);
  };

}]);


