'use strict'


let numberOfFilms;




start();

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

rememberMyFilms();
checkCountFilms();
writeYourGenres();
showMyDB();


function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посморели?');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посморели?');
	}
}

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		let a = prompt('Один из последних фильмов');
		let b = +prompt('Оценка');
		if (a == null || a.length > 50 || a == '' || b == null || b == '') {
			console.log('Error');
			i--;
		} else {
			console.log('Done');
			personalMovieDB.movies[a] = b;
		}

	}
}


function checkCountFilms() {
	if (personalMovieDB.count < 10) {
		alert('Просмотрено мало фильмов')
	} else if (personalMovieDB.count < 30) {
		alert('Вы классический зритель')
	} else {
		alert('Вы - киноман')
	}
}


function writeYourGenres(){
	for(let i=1; i<4; i++){

		personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
	}
}


function showMyDB(){
	if(personalMovieDB.privat == false)
		console.log(personalMovieDB);
}



