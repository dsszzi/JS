// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone?

function User(id, name, surname, email, phone) {

    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)

let users = [
    new User(2, 'kolia', 'sidirov', 'jgghd@khk.ua', '+380-000-000-00'),
    new User(1, 'vasya', 'petrov', 'jgafhd@khk.ua', '+380-000-000-00'),
    new User(3, 'nastia', 'bashurov', 'jgfghjfhd@khk.ua', '+380-000-000-00'),
    new User(4, 'dima', 'hyrda', 'jfghjfhd@khk.ua', '+380-000-000-00'),
    new User(7, 'kolia', 'zina', 'jgafhd@khk.ua', '+380-000-000-00'),
    new User(5, 'zelia', 'ze', 'jgaghjd@khk.ua', '+380-000-000-00'),
    new User(6, 'masha', 'mina', 'jgghjfhd@khk.ua', '+380-000-000-00'),
    new User(10, 'tolia', 'ponov', 'jgafhd@khk.ua', '+380-000-000-00'),
    new User(8, 'vasya', 'lavrov', 'jgafhd@khk.ua', '+380-000-000-00'),
    new User(9, 'jenia', 'papov', 'jgafhd@khk.ua', '+380-000-000-00'),
];

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let UserArr1 = users.filter((item) => {
    if (item.id % 2 === 0) {
        return item;
    }
})
console.log(UserArr1);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let UserArr2 = users.sort((a, b) => a.id - b.id);
console.log(UserArr2);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)


class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let productArr1 = [
    new Client(2, 'kolia', 'sidirov', 'jgghd@khk.ua', '+380-000-000-00', ['sgdgdsfg']),
    new Client(1, 'vasya', 'petrov', 'jgafhd@khk.ua', '+380-000-000-00', ['sgdgdsfg', 'sdfgfdg', 'jnkajs', 'fsdf', 'sdfs']),
    new Client(3, 'nastia', 'bashurov', 'jgfghjfhd@khk.ua', '+380-000-000-00', ['sgdgdsfg', 'sdfgfdg', 'jnkajs', 'kuk']),
    new Client(4, 'dima', 'hyrda', 'jfghjfhd@khk.ua', '+380-000-000-00', ['sgdgdsfg', 'sdfgfdg', 'jnkajs'])
]
console.log(productArr1);
// створити пустий масив, наповнити його 10 об'єктами Client
let productArr2 = [
    new Client(1, 'kolia', 'sidirov', 'jgghd@khk.ua', '+380-000-000-00', ['sgdgdsfg']),
    new Client(2, 'vasya', 'petrov', 'jgafhd@khk.ua', '+380-000-000-00', ['sgdgdsfg', 'sdfgfdg', 'jnkajs', 'fsdf', 'sdfs']),
    new Client(3, 'nastia', 'bashurov', 'jgfghjfhd@khk.ua', '+380-000-000-00', ['sgdgdsfg', 'sdfgfdg', 'jnkajs', 'kuk']),
    new Client(4, 'dima', 'hyrda', 'jfghjfhd@khk.ua', '+380-000-000-00', ['sgdgdsfg', 'sdfgfdg', 'jnkajs']),
    new Client(5, 'kolia', 'sidirov', 'jgghd@khk.ua', '+380-000-000-00', ['sgdgdsfg']),
    new Client(6, 'vasya', 'petrov', 'jgafhd@khk.ua', '+380-000-000-00', ['sgdgdsfg', 'sdfgfdg', 'jnkajs', 'fsdf', 'sdfs']),
    new Client(7, 'nastia', 'bashurov', 'jgfghjfhd@khk.ua', '+380-000-000-00', ['sgdgdsfg', 'sdfgfdg', 'jnkajs', 'kuk']),
    new Client(8, 'dima', 'hyrda', 'jfghjfhd@khk.ua', '+380-000-000-00', ['sgdgdsfg', 'sdfgfdg', 'jnkajs']),
    new Client(9, 'kolia', 'sidirov', 'jgghd@khk.ua', '+380-000-000-00', ['sgdgdsfg']),
    new Client(10, 'vasya', 'petrov', 'jgafhd@khk.ua', '+380-000-000-00', ['sgdgdsfg', 'sdfgfdg', 'jnkajs', 'fsdf', 'sdfs']),
    new Client(11, 'nastia', 'bashurov', 'jgfghjfhd@khk.ua', '+380-000-000-00', ['sgdgdsfg', 'sdfgfdg', 'jnkajs', 'kuk']),
    new Client(12, 'dima', 'hyrda', 'jfghjfhd@khk.ua', '+380-000-000-00', ['sgdgdsfg', 'sdfgfdg', 'jnkajs']),
]

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

productArr2.sort((a, b) => (a.order.length - b.order.length));
console.log(productArr2);