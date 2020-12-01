"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
const personalMiovieDB = {
    count: numberOfFilms,
    movies :{},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените кго?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');

personalMiovieDB.movies[a] = b;
personalMiovieDB.movies[c] = d;

console.log(personalMiovieDB);