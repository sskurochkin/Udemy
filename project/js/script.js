/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
//1

// document.querySelector('.promo__adv').innerHTML = '';
let add = document.querySelectorAll('.promo__adv img');
add.forEach(elem => elem.remove());

//2

document.querySelector('.promo__genre').textContent = 'драма';

//3

document.querySelector('.promo__bg').style.cssText = 'background: url("./img/bg.jpg") center center/cover no-repeat';

//4, 5
let film = document.querySelectorAll('li.promo__interactive-item');

// let sortMovies = movieDB.movies.sort();
// console.log(sortMovies);

film.forEach((elem, index) => {
    elem.textContent = `${index+1}.`+ ' '+ `${movieDB.movies.sort()[index]}`;
})