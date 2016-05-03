'use strict';

var app = angular.module('flashcardApp');

app.service('FlashCardService', function($http, $q) {

  // this.getStarDex = id => {
  //   return $http({
  //     method: 'GET',
  //     url: `http://swapi.co/api/people/?page=${id}`,
  //     cache: true
  //   })
  //   .then(res => {
  //       return $q.resolve(res.data.results);
  //   })
  // };

  this.getAll = () => {
    return $http({
      method: "GET",
      // url: `http://swapi.co/api/people/${id}`,
      url: `/api/flashcards`,
      cache: true
    })
    .then(res => $q.resolve(res.data));

  };

})
//
// // app.service('SwapiService', function ($http) {
// //   this.getCharacters = () => {
// //     $http.get('http://swapi.co/api/people')
// //     .then(res => {
// //       this.characters = res.data.results;
// //     }, err => {
// //       console.error(err);
// //     });
// //   };
// // });
//
//
// // app.service('People', function($q) {
// //   var people = [{
// //     name: 'Bob',
// //     job: 'Marine biologist'
// //   }, {
// //     name: 'Dave',
// //     job: 'Lion psychologist'
// //   }, {
// //     name: 'Jimmy',
// //     job: 'Jello juggler'
// //   }];
// //
// //   this.getAll = () => {
// //     // return people;
// //     return $q((resolve, reject) => {
// //       resolve(people)
// //     });
// //   };
// //
// //   this.getByName = name => {
// //     // returning a promise
// //     return $q((resolve, reject) => {
// //       var person = people.filter(obj => obj.name.toLowerCase() === name.toLowerCase())[0];
// //
// //       if(person) {
// //         resolve(person); // trigger .then()
// //       } else {
// //         reject(new Error('Person not found'));  // trigger .catch()
// //       }
// //
// //     });
// //   };
// // });
//
//
// // app.service('PeopleList', function($q, $http) {
// //
// //   var peopleList = {};
// //
// //   // this.getCharacters = () => {
// //   //   $http.get('http://swapi.co/api/people')
// //   //   .then(res => {
// //   //     this.characters = res.data.results;
// //   //   }, err => {
// //   //     console.error(err);
// //   //   });
// //   // };
// //
// //   this.getAll = () => {
// //     // return people;
// //     return $q((resolve, reject) => {
// //
// //       $http({
// //       	url: 'http://swapi.co/api/people',
// //       	method: 'GET'
// //       }).then(function(res){
// //         // resolve(peopleList)
// //         resolve(res.data.results);
// //       })
// //     });
// //   };
// // });
