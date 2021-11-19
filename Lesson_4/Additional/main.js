// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

let sum = 0;

function summNumbers() {

    for (let i = 0; i < arguments.length; i++) {
        if (arguments.length == 2) {
            sum += arguments[i]
        } else {
            console.log(arguments[0]);
            return;
        }
    }
    console.log(sum)

}

let x = summNumbers(2, 4);


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

function dobleArr(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        let dobleSum1 = 0;
        dobleSum = arr1[i]
        console.log(dobleSum);
        for (let j = 0; j < arr2.length; j++) {
            let dobleSum2 = 0;
            let newNum = dobleSum1 + dobleSum2;
            newArr.push(newNum);
        }
    }
    console.log(newArr);
}

dobleArr([1, 2, 3], [1, 2, 3])

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]