// const person = {
//   name: "Alex",
//   age: 25,
//   greet: function () {
//     return "Greet";
//   },
// };

// как создаются обьекты

// const obj1 = {name: "Vasya"} // рекомендуемая запись для создания
// const obj2 = new Object({name: "Vasya}) //индеинтичные записи

const person = new Object({
  name: "Alex",
  age: 25,
  greet: function () {
    return "Greet";
  },
});


//Прототипы

Object.prototype.sayHello = function () {
  console.log("Hello");
}; // В обьект Object c пом. ключевого слова prototype добавляется метод sayHello
// от обьекта Object происходят все обьекты. Object является прототипом.



//наследование
const Maxim = Object.create(person);

Maxim.name = "Maxim";
Maxim.addr = "Tambov";



//строка тоже обьект

//const arr1 = [1,2,3]
//const arr2 = new Array([1,2,3]) //индеинтичные записи

// const str1 = 'I am string'
// const str2 = new String('I am string'); //индеинтичные записи



// Перебор ключей и свойств обьекта

//for (let val in Maxim) console.log(val) //вопрос с собеса

console.log(Object.keys(Maxim));
console.log(Object.values(Maxim));

//************** */
