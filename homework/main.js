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






/* 
let budgetMonth, date;
function start() {
	budgetMonth = +prompt("Ваш бюджет на месяц?", '');
	date = prompt("Введите дату в формате YYYY-MM-DD", '');

	while(isNaN(budgetMonth) || budgetMonth == "" || budgetMonth == null) {
		budgetMonth = +prompt("Ваш бюджет на месяц?", '');
	}
}
start();

let appData = {
	budget : budgetMonth,
	timeData : date,
	expenses : {},
	optionalExpenses : {},
	income : [],
	savings : true
};

function chooseExpenses() {
	for(let i = 0; i < 2; i++) {
		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');

		if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != "" && b != "" && a.length < 50) {

			appData.expenses[a] = b;
		} else {
		i--;
		}   
	}    
}
chooseExpenses();


function detectDayBudget() {
	appData.moneyPerDay = (appData.budget / 30).toFixed(2);
	alert('Ваш бюджет на день составит - ' + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
	if (appData.moneyPerDay < 100 || appData.moneyPerDay == 100) {
		console.log("Минимальный уровень достатка");
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		console.log("Средний уровень достатка");
	} else if (appData.moneyPerDay > 2000) {
		console.log("Хороший уровень достатка");
	} else {
		console.log("Произошла ошибка");
	}
}
detectLevel();

function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt("Какова сумма накоплений?");
		let percent = +prompt("Какой процент?");

		appData.monthIncome = (save/100/12*percent).toFixed(2);
		alert("Доход с Вашего депозита: " + appData.monthIncome);
	}
}
checkSavings();

function chooseOptExpenses () {
	for(let i = 0; i <= 3; i++) {
	let optQuestion = prompt("Статья необязательных расходов?");

	appData.optionalExpenses[i] = optQuestion;
	}
}
chooseOptExpenses();
 */