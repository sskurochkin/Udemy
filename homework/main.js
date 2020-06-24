let numberOfFilms = '';
let personalMovieDB = {
	count: '',
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () { 
		let numberOfFilms;
		numberOfFilms = +prompt('Сколько фильмов вы уже посморели?');

		while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
			numberOfFilms = +prompt('Сколько фильмов вы уже посморели?');
		}
		return personalMovieDB.count = numberOfFilms;
	},
	rememberMyFilms: function () {
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
	},
	checkCountFilms: function () {
		if (personalMovieDB.count < 10) {
			alert('Просмотрено мало фильмов')
		} else if (personalMovieDB.count < 30) {
			alert('Вы классический зритель')
		} else {
			alert('Вы - киноман')
		}
	},

	writeYourGenres: function () {
		for (let i = 1; i < 4; i++) {
			let a = prompt(`Ваш любимый жанр под номером ${i}`);
			if (a == null || a.length > 50 || a == '') {
				console.log('Error');
				i--;
			} else {
				personalMovieDB.genres[i - 1] = a;
			}
		}
		personalMovieDB.genres.forEach(function (elem, index) {
			console.log(`Любимый жанр #${index+1} - это ${elem}`);
		});


	},
	showMyDB: function () {
		if (personalMovieDB.privat == false)
			console.log(personalMovieDB);
	},

	toggleVisibleDB: function () {
		if (personalMovieDB.privat == false) {
			personalMovieDB = true;
		} else {
			personalMovieDB = false;
		}
	},

}
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.checkCountFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();