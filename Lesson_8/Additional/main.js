// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

let body = document.getElementsByTagName('body')[0];
let classArr = [];

function getAllElements (element, classArr){
    if(element.classList.length) {
        classArr.push(...element.classList)
    }
    if (element.children.length) {
        for (const elementElement of element.children) {
            getAllElements(elementElement, classArr);
        }
    }
}

getAllElements(body, classArr);
console.log(classArr);
console.log(new Set(classArr));


