
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


let touch = document.querySelector('.promo__adv-title');

touch.addEventListener('touchstart', (event) => {
    event.preventDefault();

    console.log('Start');
})