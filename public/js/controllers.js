'use strict';

var app = angular.module('flashcardApp');

app.controller('homeCtrl', function($scope, $q, $http, flashCardDex) {
  console.log('home', flashCardDex);
  $scope.cards = flashCardDex;
});

app.controller('flashcardlistCtrl', function($scope, $q, $http, flashCardDex, FlashCardService) {
  $scope.cards = flashCardDex;

  // var id =
  // $scope.deleteFlashCard = function(id) {
  //   FlashCardService.delete(id);
  // }

  $scope.edit = function(card) {
    console.log('edit', card._id);
    FlashCardService.edit(card._id, card)
  }

  $scope.delete  = card => {
    FlashCardService.delete(card._id);
  }

  // $scope.delete = function(FlashCardService) {
  //   console.log('delete 1', FlashCardService);
  //
  // }

  // $scope.delete = () => {
  //   console.log('delete 2', FlashCardService);
  //   // FlashCardService.create($scope.newFlashCard);
  // }


});

app.controller('newFlashCardCtrl', function($scope, $q, $http, FlashCardService) {

  console.log('addFlashCard FlashCardService', FlashCardService);

  $scope.addFlashCard = () => {
    FlashCardService.create($scope.newFlashCard);
  }




});




// app.controller('listCtrl', function($scope, $state, starDex) {
//   console.log('listCtrl1111', starDex);
//   $scope.starDex = starDex;
// });
//
// app.controller('detailCtrl', function($scope, $interval, starwars) {
//   $scope.starwars = starwars;
//
//   console.log('starwars', starwars);
// })
