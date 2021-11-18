// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль


// let arr = [1, 2, 3, 4, 5, 'uno', 'dos', 'tres', 'sinco', 'ciete', 'smth', true, false, 'null', null];
// console.log(arr);
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//

// let newArr = [1, 2, 3, 4, 5, 'uno', 'dos', 'tres', 'sinco', 'ciete', 'smth', true, false, 'null', null];
// console.log(newArr[0]);
// console.log(newArr[1]);
// console.log(newArr[2]);
// console.log(newArr[3]);
// console.log(newArr[4]);
// console.log(newArr[5]);
// console.log(newArr[6]);
// console.log(newArr[7]);
// console.log(newArr[8]);
// console.log(newArr[9]);
// console.log(newArr[10]);
// console.log(newArr[11]);
// console.log(newArr[12]);
// console.log(newArr[13]);
// console.log(newArr[14]);
// console.log(newArr[15]);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write('<div class="white">lorem</div>')
// }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div class="white">${i}</div>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20) { // выводит 0, затем 1, затем 2
//     document.write(`<div class="white">lorem</div>`)
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i < 20) { // выводит 0, затем 1, затем 2
//     document.write(`<div class="white">lorem${i}</div>`)
//     i++;
// }
//
//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let num = [1,2,3,4,5,6,7,8,9,10];
// for (let i = 0; i < 10; i++) {
//     console.log(`${i}`)
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let smth = ['тополя','яблуко','слива','груша','машина','серий','дерево','апельсин','виноград','обід'];
// for (let i = 0; i < 10; i++) {
//     console.log(`${smth[i]}`);
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr = [true, false, 1, 2, 3, 'Rztk', 'smth', 'number', 0, '', 'true'];
// for (let i = 0; i < 11; i++) {
//     console.log(`${arr[i]}`);
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arr = [1, 2, 3, 4, 5, 'uno', 'dos', 'tres', 'sinco', 'ciete', 'smth', true, false, 'null', null];
// for (let i = 0; i < 15; i++) {
//     if (typeof arr[i] === 'boolean') {
//             console.log(arr[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arr = [1, 2, 3, 4, 5, 'uno', 'dos', 'tres', 'sinco', 'ciete', 'smth', 'true', false, 'null', 43];
// for (let i = 0; i < 15; i++) {
//         if (typeof arr[i] === 'number') {
//                 console.log(arr[i]);
//         }
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// let arr = [1, 2, 3, 4, 5, 'uno', 'dos', 'tres', 'sinco', 'ciete', 'smth', 'true', false, 'null', 43];
// for (let i = 0; i < 15; i++) {
//         if (typeof arr[i] === 'string') {
//                 console.log(arr[i]);
//         }
// }
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arr = [];
// arr[0] = 1;
// arr[2] = 2;
// arr[3] = 'foo';
// arr[4] = true;
// arr[5] = 'Nick';
// arr[6] = null;
// arr[7] = 'break';
// arr[7] = '54';
// arr[8] = 'opel';
// arr[9] = 56;
//
// for (let i = 0; i < 10; i++) {
//     console.log(arr[i]);
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 10; i++) {
//     console.log(`${arr[i]}`);
//     document.write(`${arr[i]}`);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log(`${arr[i]}`);
//     document.write(`${arr[i]}`);
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 100; i+=2) {
//     console.log(`${arr[i]}`);
//     document.write(`${arr[i]}`);
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     (i % 2 === 0) ? console.log(+i + '') : console.log();
//     document.write(`${arr[i]}`);
//     }
//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 1) {
//         console.log(`${arr[i]}`);
//         document.write(`${arr[i]}`);
//     }
// }

// ???????????????????????????????????????????????????????????????????????????
// 'Поясніть будь ласка логік' + i + ' ' яка було розписана в folder "results" стосовно поточного виведення ітого елемента масиву при кожній ітераці. ДЯКУЮ!!!!!!!
// `Поясніть будь ласка логік ${i}  ` яка було розписана в folder "results" стосовно поточного виведення ітого елемента масиву при кожній ітераці. ДЯКУЮ!!!!!!!