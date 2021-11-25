// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let strLength = (str) => str.length;
console.log(strLength('hello world'));
console.log(strLength('lorem ipsum'));
console.log(strLength('javascript is cool'));

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let strLength2 = (str) => str.toLocaleUpperCase();
console.log(strLength2('hello world'));
console.log(strLength2('lorem ipsum'));
console.log(strLength2('javascript is cool'));


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let strLength3 = (str) => str.toLocaleLowerCase();
console.log(strLength3('hello world'));
console.log(strLength3('lorem ipsum'));
console.log(strLength3('javascript is cool'));

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str1 = (str) => str.trim();
console.log(str1(' dirty string   '));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let arrHunter = (arr2) => {
    console.log(arr2.split(" "));
}
arrHunter('Каждый охотник желает знать');

//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let delete_characters = (str, length) => {
    console.log(str.substr(0, "7"));
}
delete_characters('Каждый охотник желает знать', 7)
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let insert_dash = (str) => {
    console.log(str.replaceAll(' ', '-').toLocaleUpperCase());
}
insert_dash("HTML JavaScript PHP");

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let stringFn = (str) => str[0].toLocaleUpperCase() + str.slice(1);
console.log(stringFn('яка повертає підрядок, що складається із зазначеної кількості символів'));
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize_str = (str) => {
    str.split(' ')
        .map(item => item
            .charAt(0)
            .toUpperCase() + item
            .slice(1)).join(' ');
}
console.log(capitalize_str('яка приймає рядок str як аргумент і вставляє тире'));