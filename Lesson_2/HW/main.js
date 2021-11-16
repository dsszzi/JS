//Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число-->
//(в першу, другу, третю или четверту частину години).-->
// let someTime = 7;
// if (someTime >= 0 && someTime <= 15) {
//     console.log('Firs quarter!');
// } else if (someTime > 25 && someTime <= 30) {
//     console.log('Second quarter');
// } else if (someTime > 30 && someTime <= 45) {
//     console.log('Third quarter');
// } else if (someTime > 45 && someTime < 60) {
//     console.log('Fourth quarter')
// }


//У змінній day дано якесь число від 1 до 31. Потрібно визначити,
// у яку половину(декаду) місяця потрапляє
//це число (у першу, другу чи третю).

// let someDay = 43;
// if (someDay >= 0 && someDay <= 10) {
//     console.log('Firs decade!');
// } else if (someDay > 10 && someDay <= 20) {
//     console.log('Second decade');
// } else if (someDay > 20 && someDay <= 31) {
//     console.log('Third decade');
// } else {
//     console.log('Type correct data')
// }

//
// У нас є змінна test, якщо  не дорівнює true,
// виведіть 'Вірно', інакше виведіть 'Неправильно'.-->
// <!--Перевірте роботу скрипта при test, що дорівнює true,
// false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// let test = true;
//
// switch (test) {
//     case true:
//         console.log('Вірно');
//         break;
//     default:
//         console.log('Неправильно');
// }
// let test1 = true;
//
// (test1 == true) ? console.log('Вірно') : console.log('Неа');
//
// let test2 = '10';
//
// (test2 == 10) ? console.log('Вірно') : console.log('Неа');
//
// (test2 === 10) ? console.log('Вірно') : console.log('Неа');

// Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть
// 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3-->

// let a = -3;
// (a !== 0 && a > 0) ? console.log('Вірно') : console.log('Невірно');

// Скласти розклад на тиждень за домопоги switch. Користувач
//     вводить порядковий номер дня тижня
//     і на екрані відображається інфа що заплановано на цей день.

// let day = 2;
// switch (day) {
//     case 1:
//         document.write('Спортзал');
//         break;
//     case 2:
//         document.write('Басейн');
//         break;
//     case 3:
//         document.write('Блін, твки середина тижня');
//         break;
//     case 4:
//         document.write('Підготовка до пятниці');
//         break;
//     case 5:
//         document.write('Підготовка до вихідних');
//         break;
//     case 6:
//         document.write('Прогулянка у парку');
//         break;
//     case 7:
//         document.write('Дзідзьо вихідний');
//         break;
// }

// Потрібно визначити Високосний рік чи ні.
//     Високосні роки діляться націло на 4.
//
// let currentDate = new Date().getFullYear();
// document.write(currentDate);
// if (currentDate % 4 === 0) {
//     console.log('Вискосний рік');
// } else {
//     console.log('Не високосний рік');
// }

// Використовуючи конструкцію if..else, напишіть код,
//     який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!»,
// інакше – відобразити: «Не знаєте? ECMAScript!

// let jsName = 'ECMAScript';
// let inputName = prompt("Яка «офіційна» назва JavaScript?")
// if (jsName === inputName) {
//     confirm('Вірно');
// } else {
//     confirm('Не знаєте? ECMAScript!')
// }