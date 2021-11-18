// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function min(a, b, c) {
    if (a < b && a < c) {
        console.log(a);
    } else if (b < a && b < c) {
        console.log(b);
    } else if (c < a && c < b) {
        console.log(c);
    }
}

min(3, 6, 9);
min(8, 2, 0);
min(28, 46, 278)


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function max(a, b, c) {
    if (a > b && a > c) {
        console.log(a);
    } else if (b > a && b > c) {
        console.log(b);
    } else if (c > a && c > b) {
        console.log(c);
    }
}

max(3, 6, 9);
max(8, 2, 0);
max(28, 46, 278)

// - створити функцію яка повертає найбільше число з масиву
function numbersOfPosts(arr) {
    let maxNumber = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNumber) {
            maxNumber = arr[i]
        }
    }
    console.log(maxNumber);
}

numbersOfPosts([1, 2, 3, 4, 5, 6])


// - створити функцію яка повертає найменьше число з масиву
function numbersOfPosts2(arr) {
    let minNumber = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minNumber) {
            minNumber = arr[i]
        }
    }
    console.log(minNumber);
}

numbersOfPosts2([1, 2, 3, 4, 5, 6])

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function arrSum(arr) {
    let arrElement = 0;
    for (let i = 0; i < arr.length; i++) {
        arrElement += arr[i];
    }
    console.log(arrElement);
}

arrSum([1, 2, 10]);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function arrSum(arr) {
    let arrElement = 0;
    for (let i = 0; i < arr.length; i++) {
        arrElement += arr[i];
    }
    console.log(arrElement / arr.length);
}

arrSum([10, 10, 10]);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function arrSum2(arguments) {
    let min = arguments[0];
    let max = arguments[0];
    for (let item of arguments) {
        if (item > max) {
            max = item;
        }
        if (item < min) {
            min = item;
        }
    }
    console.log(max);
    return min;
}

let x = arrSum2([1, 2, 3]);
console.log(x);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
function randomArr(arrOfNumbers) {
    for (let i = 0; arrOfNumbers.length < 100; i++) {
        let randomNumber = Math.floor(Math.random() * 100);
    }
}
randomArr();

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].