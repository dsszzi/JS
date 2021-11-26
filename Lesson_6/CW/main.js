//
// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'


// let normalizeFunc = (strName) => {
//     let actorArr = [];
//     let symbol = ['.', '-', '_'];
//
//     for (let i = 0; i < symbol.length; i++) {
//         if (strName.includes(symbol[i])) {
//             let char = strName.split(symbol[i]);
//             char.forEach((item) => {
//                 if (item) actorArr.push(item);
//             })
//             console.log(actorArr.join(' '))
//         }
//     }
// }
// normalizeFunc('Ron___Whisley');


// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let getRandomArbitrary = (min, max) => {
//     let randomArr = [];
//     for (let i = min; i < max; i++) {
//         randomArr.push(Math.floor(Math.random() * (max - min)) + min);
//     }
//     return randomArr;
// }

// getRandomArbitrary(0, 100);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// let someArr = getRandomArbitrary(0, 100);
// console.log(someArr);
//
// someArr.sort((a, b) => a - b);
// console.log(someArr);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// someArr.filter(number => number % 2 === 0);
// console.log(someArr);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let getRandomArbitrary = (min, max) => {
//     let randomArr = [];
//     for (let i = min; i < max; i++) {
//         randomArr.push(Math.floor(Math.random() * (max - min)) + min);
//     }
//     return randomArr.map(item => item.toString())
//
// }
//
// console.log(getRandomArbitrary(10, 100));


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]


// let sortNums = (arr, direction) => {
//     if (direction === 'desc') {
//         return arr.sort((a, b) => a - b);
//     } else if (direction === 'asc') {
//         return arr.sort((a, b) => a - b);
//     } else {
//         return 'Error!'
//     }
// }
// console.log(sortNums([11, 21, 3], 'desc'));
// console.log(sortNums([11, 21, 3], 'asc'));
// console.log(sortNums([11, 21, 3], 'de'));

//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let sortArr1 = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(sortArr1);

// let newArrSort = coursesAndDurationArray.filter((item) => {
//     return item.monthDuration > 5;
//
// });
// console.log(newArrSort);

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// let cutString = (str) => {
//      str.split('')
// }
//
//
// console.log(cutString('наслаждение'));

let arrHunter = (arr2) => {
    console.log(arr2.match(/.{1,3}/g));
}
arrHunter('наслаждение');

//або так

let arrHunter2 = (str, n) => {
    let res = [];
    while (str.length) {
        res.push(str.substring(0, n));
        str = str.substring(n);
        console.log(str);
    }
    return res;
}

console.log(arrHunter2('наслаждение', 3));
