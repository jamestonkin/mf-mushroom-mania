'use strict';

app.factory('MushroomStorage',function($q, $http, FBCreds) {

  let getJSON = () => {
    return $q((resolve, reject) => {
      $http.get(`${FBCreds.databaseURL}/mushrooms.json`)
      .then((mushroomObject) => {
        let mushroomCollection = mushroomObject.data;
        let mushroomArray = [];
        Object.keys(mushroomCollection).forEach((key) => {
          var newShroomObj = {};
          var smellyMushroom = String(Object.keys(mushroomCollection[key]));
          newShroomObj.name = smellyMushroom;
          newShroomObj.description = mushroomCollection[key][smellyMushroom].description;
          newShroomObj.edible = mushroomCollection[key][smellyMushroom].edible;
          mushroomArray.push(newShroomObj);
        });
        resolve(mushroomArray);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };

  return {getJSON};
});
