'use strict';

var app = angular.module("MushroomApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: "/partial/mushroom.html",
    controller: "MushroomCtrl"
  });
});

app.run(($location, FBCreds) => {
	let creds = FBCreds;
	let authConfig = {
		apiKey: creds.apiKey,
		authDomain: creds.authDomain,
    databaseURL: creds.databaseURL
	};
});
