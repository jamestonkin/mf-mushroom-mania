'use strict';

app.controller("MushroomCtrl", function($scope, MushroomStorage) {

  MushroomStorage.getJSON()
  .then(function(mushroomCollection) {
    $scope.mushrooms = mushroomCollection;
  });

});
