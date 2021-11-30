// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
let node1 = document.getElementById('main_header');
let today = new Date();
let month = today.getMonth();
let year = today.getFullYear();
node1.innerText = `група № ${month} + ${year}`

// b) робить шириниу елементу ul 400px

let node2 = document.getElementsByTagName('ul');
console.log(node2);
node2[0].style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%

let node3 = document.getElementsByClassName('linkList');
for (let node3Element of node3) {
    node3Element.style.width = '50%'
}
// d) отримує текст який зберігається в елементі з класом listElement2

let node4 = document.getElementsByClassName('listElement2');
console.log(node4[0].innerText)
// e) отримує всі елементи li та змінює ім колір фону на сірий
let node5 = document.getElementsByTagName('li');
for (let node5Element of node5) {
    console.log(node5Element)
    node5Element.style.background = 'gray';
}

// f) отримує всі елементи 'a' та додає їм клас anchor
let node6 = document.querySelectorAll('a');
for (const node6Element of node6) {
    console.log(node6Element);
    node6Element.classList.add('anchor');
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let node7 = document.querySelectorAll('a');
for (const node7Element of node6) {
    if (node7Element.innerText.includes('link3')) {
        node7Element.style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let node8 = document.querySelectorAll('a');
for (const node8Element of node6) {
    node8Element.classList.add(`${node8Element.innerText}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let node9 = document.getElementsByClassName('sub-header');
let color = prompt('Введіть назву кольору', 'red');
for (const node9Element of node9) {
    node9Element.style.background = `${color}`;
}
console.log(node9);

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let node10 = document.getElementsByClassName('sub-header');
let color = prompt('Введіть назву кольору', 'red');
for (const node10Element of node10) {
    if (node10Element.innerText.includes('content 2 segment')) {
        node10Element.style.color = `${color}`;
    }
}
console.log(node10);

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

let node11 = document.getElementsByClassName('content_1');
console.log(node11[0].firstElementChild.innerText = prompt ('Введіть свій текст'));

// let textNode = prompt('Введіть текст');




// l) отримати елементи p та змінити їм padding на 20px

let node12 = document.querySelectorAll('p');
for (const node12Element of node12) {
    node12Element.style.padding = '20px';
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let today = new Date();
let month = today.getMonth();
let year = today.getFullYear();
let node13 = document.getElementsByClassName('text2');
for (const node13Element of node13) {
    node13Element.innerText = `група № ${month} + ${year}`
}