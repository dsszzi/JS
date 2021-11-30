// // Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
// //
// //     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// // -- отримує текст з параграфа з id "content"
//
// let node1 = document.getElementById('content');
// console.log(node1.innerText);
// // -- отримує текст з блоку з id "rules"
// let node2 = document.getElementById('rules');
// console.log(node2.innerText);
// // -- замініть текст параграфа з id 'content' на будь-який інший
// let node3 = document.getElementById('content');
// console.log(node1.innerText = 'iunsivghsleihgmvsilehvgls');
// console.log(node3);
//
// // -- замініть текст параграфа з id 'rules' на будь-який інший
// let node4 = document.getElementById('rules');
// console.log(node4.innerText = node2.innerText);
// console.log(node4);
//
// // -- змініть кожному елементу колір фону на червоний
// let node5 = document.body.children;
// console.log(node5);
//
// for (const node5Element of node5) {
//     console.log(node5Element);
//     node5Element.style.background = 'silver';
// }
//
// // -- змініть кожному елементу колір тексту на синій
//
// for (const node5Element of node5) {
//     console.log(node5Element.innerText);
//     node5Element.style.color = 'red';
// }
// // -- отримати весь список класів елемента з id=rules і вивести їх в console.log
//
// let node6 = document.getElementById('rules');
// console.log(node6.classList)

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let node7 = document.getElementsByClassName('fc_rules');
for (const node7Element of node7) {
    node7Element.style.color = 'red';
}