//Прототипное ООП

const car = {
  name: "anyName",
  color: "anyColor",
  type: "sedan",
  maxSpeed: 0,
  drive: function () {
    console.log("drive");
  },
};

//Наследование

const mersedes = Object.create(car); //мерседес наследует свойсва и методы car
mersedes.name = "mersedes"; //меняем на нужное
mersedes.color = "Black";

console.log("mersedes was extended from car");
console.log("and have name:", mersedes.name);
console.log("and have type:", mersedes.type);

//*****************************/

//функция конструктор и создание инстанса

function Car(name = "", color = "black", maxSpeed = 0) { //значения аргументов по умолчанию (если ничего не передаем в конструкторе)
  this.name = name;
  this.color = color;
  this.maxSpeed = maxSpeed;

}

Car.prototype.drive = function () { //добовляем метод drive к конструктору Car
  return `drive with 200 km/h`;
}; 

//**************************************************

const bmw = new Car("bmw", "black", 180); // создание конкретной машины (инстанса обьекта) через конструктор
const mers = new Car("mers", "white", 100);



// Прототипное наследование

function CarPlus(name, color, maxSpeed) {
  Car.call(this, name, color);  // так наследуем поля от конструктора Car
  this.addition = 'have super panel'
}

CarPlus.prototype = Object.create(Car.prototype) // так наследуем методы от Car

CarPlus.prototype.superAccelerate = function(){
  console.log("Accelerate to 200 km/h")
}

bmvPlus = new CarPlus('bPlus', 'zzz', 10000) // bmvPlus содержит методы и поля Car и CarPlus