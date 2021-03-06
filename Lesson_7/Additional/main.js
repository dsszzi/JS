//
// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//              geo: {
//                  lat: '-37.3159',
//                  lng: '81.1496'
//              }
//      },
// {
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }


class position {
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
}

class clientAddress {
    constructor(street, suite, city, zipcode, position) {
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.position = position;
    }
}

class createClient {
    constructor(id, name, username, email, adress) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = adress;
    }
}

let firstClient = new createClient(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', new clientAddress('Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', new position('-37.3159', '81.1496')));
console.log(firstClient);


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//              {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//              {/*some props and values*/},
//              {/*...*/},
//              {/*...*/},
//             ]
//
// }

class attrs {
    constructor(titleOfAttr, props, values) {
        this.titleOfAttr = titleOfAttr;
        this.props = props;
        this.values = values;
    }
}


class htmlBook {
    constructor(title, action, attrs) {
        this.title = title;
        this.acton = action;
        this.attrs = attrs;
    }
}

let tag = new htmlBook(
    '232',
    'njhangsjgvcdfg',
    [
        new attrs('a', 'Активация ссылки с помощью комбинации клавиш.', 'svgfdfg'),
        new attrs('div', 'vsfgvdfg', 'Отношения между ссылаемым и текущим документами.'),

    ]
);
console.log(tag)