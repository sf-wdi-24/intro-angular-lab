var app = angular.module('movies', []);

app.controller('moviesCtrl', ['$scope', function($scope) {
  $scope.moviesToWatch = [
    {
      title: 'batman'
    },
    {
      title: 'superman'
    },
    {
      title: 'doge, the ultimate wow'
    }, 
    {
      title: 'react vs angular'
    },
    {
      title: 'never watch this'
    },
    {
      title: 'applesauce'
    }
  ];
  $scope.createMovie = function() {
    var newMovie = $scope.newMovie = {};
    $scope.moviesToWatch.push(newMovie);
    $scope.newMovieForm = false;
  };
  $scope.deleteMovie = function (movie) {
    var movieIndex = $scope.moviesToWatch.indexOf(movie);
    $scope.moviesToWatch.splice(movieIndex, 1);
  };
}])