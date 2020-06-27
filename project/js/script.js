/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

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

const adv = document.querySelectorAll('.promo__adv img');
let filmList = document.querySelector('.promo__interactive-list');
let delBtn;
let addBtn = document.querySelector('.add > button:nth-child(7)');
let favFilm = document.querySelector('.yes').previousElementSibling.checked;
let newFilm = document.querySelector('.adding__input');

const deleteAdv = (arr) => {
    arr.forEach(elem => elem.remove());
}
const sortFilms = (arr) => {
    arr.sort();
}


document.querySelector('.promo__genre').textContent = 'драма';
document.querySelector('.promo__bg').style.cssText = 'background: url("./img/bg.jpg") center center/cover no-repeat';


function renderFilmList(films, parent) {
    parent.innerHTML = '';
    sortFilms(films);
    films.forEach((elem, index) => {
        parent.innerHTML += `
    <li class="promo__interactive-item">${index+1}. ${elem} 
    <div class="delete"></div>
`
    });
    delBtn = document.querySelectorAll('li.promo__interactive-item div');
    delBtn.forEach((element, index) => {
        element.addEventListener('click', function (event) {
            films.splice(index, 1);
            renderFilmList(films, parent);
        });
    });

}



addBtn.addEventListener('click', (event) => {
    event.preventDefault();

    if (newFilm.value) {
        if (newFilm.value.length > 21) {
            newFilm.value = `${newFilm.value.substring(0, 22)}...`;
        }
        movieDB.movies.push(newFilm.value[0].toUpperCase() + newFilm.value.slice(1, newFilm.value.length));
        checkFavourite();
    } else {
        console.log('Error');
    }
    renderFilmList(movieDB.movies, filmList);
    newFilm.value = '';
});

function checkFavourite() {
    if (favFilm)
        console.log('Вы добавили любимый фильм');
}


deleteAdv(adv);
renderFilmList(movieDB.movies, filmList);