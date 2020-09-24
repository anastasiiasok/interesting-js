//This, Bind, Call, Apply

function hello() {
  console.log("Hi", this); // this - ключевое слово this динамично и ссылается на тот обьект в контексте которого оно было вызванно
  // function hello2() {console.log('hi2', this)}
  // //const funct = hello2.bind(this)
  // hello2.call(this)
}

console.log("hello", hello());

person = {
  name: "Alex",
  age: 25,
  sayHello: hello,
  //sayHelloWindow: hello.bind(window),
  logInfo: function (job, tel) { // сначало без аргументов
    console.log(`name is ${this.name}`);
    console.log(`age is ${this.age}`);
    //console.log(`job is ${job}`);
    //console.log(`tel is ${tel}`);
  },
};

//arguments
//call
//apply

man = {
  name: "Maxx",
  age: 20,
};

const manInfo = person.logInfo.bind(man); // bind создает ф-ю maxxInfoLog с привязанным к ней контекстом man
manInfo(); // сначало без аргументоа
manInfo("frontendDev", "910323232");
//or
const manInfo = person.logInfo.bind(man, "frontendDev", "910323232");



person.logInfo.call(person2, "backendDev", "910323323"); // call вызывает ф-ю person.logInfo с привязанным к ней контекстом person2 и аргументами admin и 910323323
person.logInfo.apply(person2, ["admin", "92032232"]);

arr = [1, 2, 3, 4, 5, 6];

// function multBy(arr, n) {
//   return arr.map((el) => {
//     return el * n;
//   });
// }

// console.log(multBy(arr, 2))

// на собесах - напишите метод, который будет присутствовать у массива...

Array.prototype.multBy = function (n) {
  //В обьекте Array, который является прототипом всех массивов, создаем метод multBy, через ключевое слово prototype

  console.log('mult by - ', this)

  return this.map((el) => el * n);
};

console.log(arr.multBy(3)); //метод multBy доступен в массиве, тк массив произошел от Array
