// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7,
// 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true
//
// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");


// let a = 'hello';
// console.log(a);
// alert(a);
// document.write(a);
//
// let b = 'owu';
// console.log(b);
// alert(b);
// document.write(b);
//
// let c = 'com';
// console.log(c);
// alert(c);
// document.write(c);
//
// let d = 'ua';
// console.log(d);
// alert(d);
// document.write(d);
//
// let e = 1;
// console.log(e);
// alert(e);
// document.write(e);
//
// let f = 10;
// console.log(f);
// alert(f);
// document.write(f);
//
// let g = -999;
// console.log(g);
// alert(g);
// document.write(g);
//
// let h = 123;
// console.log(h);
// alert(h);
// document.write(h);
//
// let i = 3.14;
// console.log(i);
// alert(i);
// document.write(i);
//
// let j = 2.7;
// console.log(j);
// alert(j);
// document.write(j);
//
// let k = 16;
// console.log(k);
// alert(k);
// document.write(k);
//
// let l = true;
// console.log(l);
// alert(l);
// document.write(l);
//
// let m = false;
// console.log(m);
// alert(m);
// document.write(m);


// ___________________________________________

// a = '1';
// console.log(a);
// alert(a);
// document.write(a);
//
// b = '2';
// console.log(b);
// alert(b);
// document.write(b);
//
// c = '3';
// console.log(c);
// alert(c);
// document.write(c);
//
// d = '4';
// console.log(d);
// alert(d);
// document.write(d);
//
// e = 5;
// console.log(e);
// alert(e);
// document.write(e);
//
// f = 6;
// console.log(f);
// alert(f);
// document.write(f);
//
// g = 79;
// console.log(g);
// alert(g);
// document.write(g);
//
// h = 8;
// console.log(h);
// alert(h);
// document.write(h);
//
// i = 9;
// console.log(i);
// alert(i);
// document.write(i);
//
// j = 10;
// console.log(j);
// alert(j);
// document.write(j);
//
//
// k = 13;
// console.log(k);
// alert(k);
// document.write(k);
//
// l = false;
// console.log(l);
// alert(l);
// document.write(l);
//
// m = true;
// console.log(m);
// alert(m);
// document.write(m);

//___________________________________

// let firstName;
// let middleName;
// let lastName;
//
// firstName = 'Anatolii';
// middleName = 'Petliak';
// lastName = 'Victorovuch';
//
// let MyAllFamillyName = firstName + middleName + lastName;
// console.log(MyAllFamillyName);
//
// let name = prompt('What is you name?');
// alert(`Hallo ${name}!`);
//
// let midName = prompt('What is you middle name?');
// alert(`Hallo Mr. ${name} ${midName}!`);
//
// let info = prompt('What is you age?');
// alert(`Mr.${name} ${midName} is ${info}!`);


//__________________________
// let a = 100;
// let b = '100';
// let c = true;
//
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

//_____________________________

// 5 < 6 -> true
// 5 > 6 -> false
// 5 === 6 -> false
// 5 == 6 -> false
// 5 >= 6 -> false
// 10 == 10 -> true
// 10 === 10 -> true
// 10 > 10 -> false
// 10 < 10 -> false
// 10 !== 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true

//_____________________________
// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
let str = "20";
let a = 5;
//"<br/>" перенос на наступну строку
document.write(str + a + "<br/>"); //конкатинація строки, приведено все до сточного типу, ну і склейка строки, код зліва на право
document.write(str - a + "<br/>"); //операція віднімання, строки перетворюються в числа
document.write(str * "2" + "<br/>"); //операція множення, строки перетворюються в числа
document.write(str / 2 + "<br/>"); //операція ділення, строки перетворюються в числа
//якщо будемо ділити чи множити сторку нечислову отримаємо NaN