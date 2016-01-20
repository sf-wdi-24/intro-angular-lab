var app = angular.module('movieApp', []);

app.controller('MainCtrl', ['$scope', function($scope) {
  $scope.moviesToWatch = [
    {
      title: "The Revenant",
      watched: false
    },
    {
      title: "Star Wars: The Force Awakens",
      watched: false
    },
    {
      title: "Norm of the North",
      watched: false
    },
    {
      title: "The Forest",
      watched: false
    },
    {
      title: "Sisters",
      watched: false
    },
    {
      title: "The Hateful Eight",
      watched: false
    }
  ];

  $scope.limit = 5;

  $scope.addMovie = function() {
    $scope.moviesToWatch.push($scope.newMovie);
    $scope.addMovieForm = false;
    $scope.newMovie = {};
  };

  $scope.deleteMovie = function(movie) {
    var movieIndex = $scope.moviesToWatch.indexOf(movie);
    $scope.moviesToWatch.splice(movieIndex, 1);
  };

  $scope.showMore = function() {
    $scope.limit = null;
  };

}]);