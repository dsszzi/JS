// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let div = document.createElement('div');
// div.id = 'textDiv';
// document.body.appendChild(div);
// let p = document.createElement('p');
// p.id = 'text';
// let hiddenDiv = document.getElementById('textDiv');
// hiddenDiv.appendChild(p);
// hiddenDiv.innerText = 'чтобы при клике на кнопку исчезал элемент с id="text".'
//
//
// let button = document.createElement('button');
// document.body.appendChild(button);
// button.innerText = 'чтобы при клике на кнопку исчезал элемент с id="text';
// button.onclick = function () {
//     div.style.display = 'none';
// }
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.


// let btn = document.createElement('button');
// btn.innerText = 'чтобы при клике на кнопку исчезал элемент с id="text';
// document.body.appendChild(btn);
// btn.onclick = function () {
//    btn.style.display = 'none';
// }


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//


let input = document.createElement('input');
input.value = '';
input.id = 'textArea'
document.body.appendChild(input);

let btn = document.createElement('button');
btn.innerText = 'чтобы при клике на кнопку исчезал элемент с id="text';
btn.id = 'btn';
document.body.appendChild(btn);


document.getElementById('btn').onclick = function () {
  let age =   document.getElementById('textArea').value;
   if (+age < 18) {
       let alert = document.createElement('p');
       alert.innerText = "Ви замалі"
       document.body.appendChild(alert);
    } else {
       let alert = document.createElement('p');
       alert.innerText = "Вам повезло";
       document.body.appendChild(alert);
    }
}

// - Создайте меню, которое раскрывается/сворачивается при клике
//

let div = document.createElement('div');
div.value = '';
div.id = 'textArea'
document.body.appendChild(div);

let h2 = document.createElement('h2');
h2.innerText = 'PRESS ME';
h2.id = 'h2';
div.appendChild(h2);


let list  = function (){
    let ul = document.createElement('ul');
    ul.id = 'ul';
    div.appendChild(ul);

    for (let i = 1; i < 10; i++) {
        let li = document.createElement('li');
        li.innerText = `${i}`;
        ul.appendChild(li);
    }
}
list();


h2.onclick = function () {
    let toggle = document.getElementById('ul');
    toggle.classList.toggle('hidden');
};


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.





