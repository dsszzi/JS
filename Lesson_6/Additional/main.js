// var anyString = 'Mozilla';
//
// // Отобразит 'Moz';
// console.log(anyString.substring(0, 3));
// console.log(anyString.substring(3));
// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]


// let arrHunter = (arr2) => {
//     console.log(arr2.match(/.{1,3}/g));
// }
// arrHunter('наслаждение');
//
// //або так
//
// let arrHunter2 = (str, n) => {
//     let res = [];
//     while (str.length) {
//         res.push(str.substring(0, n));
//         str = str.substring(n);
//     }
//     return res;
// }
//
// console.log(arrHunter2('наслаждение', 3));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.


let emailValidate = (email) => {
    let testEmail = email.toLowerCase();
    //наявність равлика
    if (!testEmail.indexOf('@')) return false;
    //наявність крапки
    if (!testEmail.indexOf('.')) return false;
    //:данні до знака равлика(@)
    if (testEmail.indexOf('@') < 1) return false;
    // крапку яка знаходиться не меньше ніж на 2 символ далі після равлика
    if (testEmail.indexOf(".") <= testEmail.toLowerCase().indexOf("@") + 2) return false;
    //наявність символів у кінці, або крапка не повинна бути в кінці
    if (testEmail.indexOf('.') === email.length - 1) return false;
    //присутність спецсимволів

    let symbolTest = testEmail.split('');
    for (let i = 0; i < symbolTest.length; i++) {
        if (symbolTest[i] === '~' || symbolTest[i] === '!' || symbolTest[i] === '*' ||
            symbolTest[i] === '+' || symbolTest[i] === '(' || symbolTest[i] === ')' ||
            symbolTest[i] === '?') return false; // і так далі всі специмволи
    }
    return true;
}
console.log(emailValidate('someemail@gmail.com'));
console.log(emailValidate('someeMAIL@gmail.com'));
console.log(emailValidate('someeMAIL@i.ua'));
console.log(emailValidate('some.email@gmail.com'));
console.log(emailValidate('som~e.email@gmail.com'));


// - є масивlet coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules






// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5




// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'