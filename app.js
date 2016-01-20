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
  $scope.movieCount = $scope.moviesToWatch.length;
}])