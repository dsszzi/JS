// 1. Створити пустий масив та :
// a. заповнити його 50 парними числами за допомоги циклу.
// b. заповнити його 50 непарними числами за допомоги циклу.
// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)


// let arrOfNumbers = [];

// while (arrOfNumbers.length < 50) {
//     arrOfNumbers.push(Math.floor(Math.random() * 100));
// }
// console.log(arrOfNumbers[0]);

// for (let i = 0; arrOfNumbers.length < 50; i++) {
//     let randomNumber = Math.floor(Math.random() * 100);
//     if (randomNumber % 2 === 0) {
//         arrOfNumbers.push(randomNumber);
//     }
//     console.log(arrOfNumbers[i]);
// }
// console.log(arrOfNumbers);

// for (let i = 0; arrOfNumbers.length < 50; i++) {
//     let randomNumber = Math.floor(Math.random() * 100);
//     if (randomNumber % 2 === 1) {
//         arrOfNumbers.push(randomNumber);
//     }
//     console.log(arrOfNumbers[i]);
// }
// console.log(arrOfNumbers);

// for (let i = 0; arrOfNumbers.length < 20; i++) {
//     arrOfNumbers.push (Math.floor(Math.random() * (732 - 8) + 8));
//
// }
// console.log(arrOfNumbers);

// Тутбез метода push
// for (let i = 0; arrOfNumbers.length < 20; i++) {
//     let everyNumber = (Math.floor(Math.random() * (732 - 8) + 8));
//     arrOfNumbers[i] = everyNumber;
// }
// console.log(arrOfNumbers);

// 2. Вивести за допомогою console.log кожен третій елемен
// let arrOfNumbers = [];
// for (let i = 0; arrOfNumbers.length < 20; i++) {
//     let everyNumber = (Math.floor(Math.random() * (732 - 8) + 8));
//     arrOfNumbers[i] = everyNumber;
//
// }
// for (let i = 0; i < arrOfNumbers.length; i+=3) {
//     console.log(arrOfNumbers[i]);
// }
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// let arrOfNumbers = [];
// for (let i = 0; arrOfNumbers.length < 20; i++) {
//     let everyNumber = (Math.floor(Math.random() * (732 - 8) + 8));
//     arrOfNumbers[i] = everyNumber;
//
// }
// for (let i = 0; i < arrOfNumbers.length; i+=3) {
//     let number = arrOfNumbers[i];
//     if (number%2 ===0){
//
//         console.log(arrOfNumbers[i]);
//     }
// }
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let arrOfNumbers = [];
// for (let i = 0; arrOfNumbers.length < 20; i++) {
//     let everyNumber = (Math.floor(Math.random() * (732 - 8) + 8));
//     arrOfNumbers[i] = everyNumber;
//
// }
// for (let i = 0; i < arrOfNumbers.length; i+=3) {
//     let number = arrOfNumbers[i];
//     if (number%2 ===0){
//         let newArr = [];
//         newArr.push(number);
//         console.log(number);
//     }
// }

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let arrOfNumbers = [1, 2, 3, 5, 7, 9, 56, 8, 67];
// for (let i = 0; i < arrOfNumbers.length; i++) {
//     if (arrOfNumbers[i+1]%2 === 0){
//         console.log(arrOfNumbers[i]);
//     }
//
// }

// console.log(arrOfNumbers);

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let price = [100, 250, 50, 168, 120, 345, 188];
// let priceElement = 0;
// for (let i = 0; i < price.length; i++) {
//     priceElement += price[i];
// }
// console.log(priceElement / price.length);


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let arrOfNumbers = [];
// for (let i = 0; arrOfNumbers.length < 50; i++) {
//     let randomNumber = Math.floor(Math.random() * 100);
//     arrOfNumbers.push(randomNumber*5);
//     let newArray = arrOfNumbers.slice();
//     console.log(newArray[i]);
// }
// console.log(arrOfNumbers);


// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

for (let citiesWithIdElement of citiesWithId) {
    console.log(typeof citiesWithIdElement)
    // for (const citiesWithIdElementElement of citiesWithIdElement) {
    //     console.log(citiesWithIdElementElement);
    // }
}



// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
// // TO BE CONTINUED .....
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.