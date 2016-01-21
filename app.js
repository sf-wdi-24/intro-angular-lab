var app = angular.module("intro", []);

app.controller("MainCtrl", ['$scope', function($scope) {
  
  $scope.moviesToWatch = [
  { title: "Pulp Fiction",
    rating: "R" 
  },
  
  { title: "The Sandlot",
    rating: "G" 
  },
  
  { title: "X-Men",
    rating: "PG-13" 
  },
  
  { title: "Captain America",
    rating: "PG-13"
  },
  
  { title: "Rounders",
    rating: "R" 
  },
  
  { title: "Toy Story",
    rating: "G"
  }

  ];

  $scope.createMovie = function() {
    
    $scope.moviesToWatch.push($scope.newMovie);
    $scope.newMovie = {};
    $scope.newMovieForm = false;
  };

  $scope.deleteMovie = function(movie) {
    var movieIndex = $scope.moviesToWatch.indexOf(movie);
    $scope.moviesToWatch.splice(movieIndex, 1);
  };

  $scope.markWatched = function(movie) {
    movie.watched = (movie.watched ? false : true);
  };


}]);