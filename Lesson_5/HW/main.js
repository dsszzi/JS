// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let sum = (a, b) => a + b;
console.log(sum(2, 2));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let sircleS = (r) => 3.14 * r * r;
console.log(sircleS(2));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let cilinderS = (r, h) => 3.14 * r * r * h;
console.log(cilinderS(2, 6));

// - створити функцію яка приймає масив та виводить кожен його елемент

let arr1 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
    arr1([1, 2, 3, 4, 5, 6]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

    let creatParagraph = (text) => document.write(`<p>${text}</p>`);
    creatParagraph('werstgetgyrtgeyhye');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

   let createList1 = (text, q) => {
        document.write('<ul>');
        for (let i = 0; i < q; i++) {
            document.write(`<li>${text}</li>`);
        }
        document.write('</ul>');
    }

    createList1('smth', 3);

// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий. Кількість
// li визначається другим аргументом, який є числовим (тут використовувати цикл)
    let createList2 = (text, q) => {
        document.write('<ul>');
        for (let i = 0; i < q; i++) {
            document.write(`<li>${text}</li>`);
        }
        document.write('</ul>');
    }
    createList2('smth', 10);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


    let createList3 = (arr) => {
        document.write('<ul>');
        for (let i = 0; i < arr.length; i++) {
            document.write(`<li>${arr[i]}</li>`);
        }
        document.write('</ul>');
    }
    createList3([1, 'Piter', 3.14, true, false]);
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

    let createList4 = (arr) => {
        document.write('<div>');
        for (let i = 0; i < arr.length; i++) {
            document.write(`<li>${arr[i].id} ${arr[i].name} ${arr[i].age}</li>`);
            console.log(arr);
        }
        document.write('</div>');
    }
    createList4([{name: 'John', id: 1, age: 22}, {name: 'Lena', id: 2, age: 33}]);