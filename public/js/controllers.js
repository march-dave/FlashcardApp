'use strict';

var app = angular.module('flashcardApp');


app.controller('homeCtrl', function($q, $http) {
  console.log('homeCtrl111111');
});

app.controller('listCtrl', function($scope, $state, starDex) {
  console.log('listCtrl1111', starDex);
  $scope.starDex = starDex;
});

app.controller('detailCtrl', function($scope, $interval, starwars) {
  $scope.starwars = starwars;

  console.log('starwars', starwars);
})
