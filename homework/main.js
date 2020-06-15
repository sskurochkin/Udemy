let numberOfFilms = +prompt('Сколько фильмов вы уже посморели?');

let personalMovieDB = {
	count	:	numberOfFilms,
	movies	:	{},
	actors	:	{},
	genres	:	[],
	privat	:	false
};

let which = prompt('Один из последних фильмов');
let rate = +prompt('Оценка');
personalMovieDB.movies[which] = rate;
let which2 = prompt('Один из последних фильмов');
let rate2 = +prompt('Оценка');
personalMovieDB.movies[which2] = rate2;