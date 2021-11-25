// - Дано натуральное число n. Выведите все числа от 1 до n.

let N = (n) => {
    for (let i = 0; i <= n; i++) {
        if (i > 0) {
            console.log(i);
        }
    }
}
N(5);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

let numberArray = (numberA, numberB) => {
    if (numberA > numberB) {
        for (let i = 0; i <= numberA; i++) {
            console.log(i);
        }

    } else {
        for (let i = numberA; i > 0; i--) {

            console.log(i);
        }
    }
}
numberArray(10, 20);


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let someFunc = (someArr, someNumber) => {
    let newArr = [];
    let nexNum = 0;
    if (typeof someArr === 'object') {
        for (let i = 0; i < someArr.length; i++) {
            if (i !== someNumber && i !== someNumber + 1) {
                newArr.push(someArr[i]);
            } else if (i === someNumber) {
                nexNum = someArr[i];
                newArr.push(someArr[i] = someArr[i + 1]);
            } else if (i === someNumber + 1) {
                newArr.push(nexNum);
            }
        }
    }
    console.log(newArr);
}
someFunc([9, 8, 0, 4], 2);
someFunc([9, 8, 0, 4], 0);
someFunc([9, 8, 0, 4], 1);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let someArr = (arr) => {

    let newNum = [];
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            newArr.push(arr[i]);
        } else {
            newNum.push(arr[i]);
        }
    }
    for (let i = 0; i < newNum.length; i++) {
        newArr.push(newNum[i]);
    }
    console.log(newArr);
}

someArr([1, 2, 5, 0, 7, 4, 6, 0, 0, 3, 5, 7, 0]);
someArr([0,0,1,0]);
someArr([0,1,2,3,4]);

