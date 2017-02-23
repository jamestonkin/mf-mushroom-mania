'use strict';

app.controller('ShroomCtrl',function($scope, $http) {
    $scope.shrooms = null;
    $http({method: 'GET', url: '../../data/shrooms.json'})
      .then(function(data) {
        console.log('data: ', data);
        $scope.shrooms = data.data.mushrooms;
        angular.forEach($scope.shrooms, function(key) {
          console.log('key: ', key);
        });
      });
});
