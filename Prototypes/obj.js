// Ссылочные и примитивные типы данных

const arrNum = [1, 2, 3]; // ссылочные
const person = {
  name: "Alex",
  age: 25,
  details: {
    skin: "reg",
    height: "tall",
  },
};

// const nameVar = "name";
// console.log(person[nameVar]) // ключем обьекта может быть переменная стринг

const number = 1; // примитив

function changer(arr, per, num) {
  const newArr = arr; // передача значений переменной по ссылке (тк массив - ссылочный тип данных)
  const newPer = per; // передача значений переменной по ссылке
  // const newArr = [...arr] // копирование массива
  // const newPer = {...per} // копирование обьекта
  let newNumber = num; // копирование значений из одной переменной в другую

  newArr.push(4);
  newPer.name = "Dima";
  newNumber += 1;
  console.log("Внутри ф-ии", newArr, newPer, newNumber);
}

changer(arrNum, person, number);

console.log("Снаружи ф-ии", arrNum, person, number);
