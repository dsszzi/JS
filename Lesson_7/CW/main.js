// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

function createCar(model, producer, year, maxSpeed, v) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.v = v;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

    this.info = function () {
        for (const argument in this) {
            if (typeof this[argument] !== 'function') {
                console.log(`${argument}:${this[argument]}`);
            }
        }
    }
    this.newSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
        console.log(this.maxSpeed);
    }

    this.changeYear = function (newYear) {
        this.year = newYear;
        console.log(this.year);
    }

    this.addDriver = function (driver, driverInfo) {
        this.driver = driver;
        this.driverInfo = driverInfo;
    }
}

console.log(new createCar('mazda', 'china', '1234', 240, 15));
let newCar = new createCar('opel', 'deutchland', '1897', 270, 24);
console.log(newCar)
newCar.info();
newCar.newSpeed(25);
newCar.changeYear('1874');
newCar.addDriver('kokos', {age: 25, category: 'B', driverAge: 13});
console.log(newCar);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

class createCar1 {
    constructor(model, producer, year, maxSpeed, v) {

        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.v = v;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

    info() {
        for (const argument in this) {
            if (typeof this[argument] !== 'function') {
                console.log(`${argument}:${this[argument]}`);
            }
        }
    }

    newSpeed(newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
        console.log(this.maxSpeed);
    }

    changeYear(newYear) {
        this.year = newYear;
        console.log(this.year);
    }

    addDriver(driver, driverInfo) {
        this.driver = driver;
        this.driverInfo = driverInfo;
    }
}

console.log(new createCar1('bmw', 'deutchland', '12114', 300, 455));
let newCar2 = new createCar1('opel', 'deutchland', '1117', 270, 24);
console.log(newCar2)
newCar2.info();
newCar2.newSpeed(40);
newCar2.changeYear('1626');
newCar2.addDriver('makos', {age: 245, category: 'C', driverAge: 25});
console.log(newCar2);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class popelushkaArr {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let popelushkaStore = [
    new popelushkaArr('masha', 25, 55,),
    new popelushkaArr('natasha', 31, 51,),
    new popelushkaArr('mina', 14, 36,),
    new popelushkaArr('masha', 18, 25,),
    new popelushkaArr('msmina', 22, 48,),
    new popelushkaArr('maka', 55, 36,),
    new popelushkaArr('shmiaka', 101, 34,),
    new popelushkaArr('myka', 14, 35,),
    new popelushkaArr('shmyka', 30, 32,)

]

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class princeCreator {
    constructor(name, age, foundShouse) {
        this.name = name;
        this.age = age;
        this.foundShouse = foundShouse;
    }
}

const newprince = new princeCreator ('kokos', 22, 36);
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

console.log(newprince);


let merridge = (popelushkaStore, newprince) => {
    for (const item of popelushkaStore) {
        console.log(item)
        if (item.size === newprince.foundShouse) {
            return newprince.name + ' + ' + item.name + ' = ' + 'love';
        }
    }
}
console.log(merridge(popelushkaStore, newprince));

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let freePopelushka = popelushkaStore.find((item) => item.size === newprince.foundShouse);
console.log(freePopelushka);