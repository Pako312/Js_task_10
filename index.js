'use strict'

// 1) Напишите функцию JavaScript, 
// которая принимает массив из списка названий стран в качестве входных данных и
//  возвращает самое длинное название страны в качестве выходных данных.
// Например вызывая функцию getLongestCountryName(["Россия", "Украина", "Соединённые Штаты Америки"])
// Ожидаемые результат: Соединённые Штаты Америки

// function findName(countryNames) {
//     let longestName = '';
//     for (let i = 0; i < countryNames.length; i++) {
//         if (countryNames[i].length > longestName.length) {
//             longestName = countryNames[i];
//         }
//     }
//     return longestName;
// }
//     const countryNames = ["Россия", "Украина", "Соединённые Штаты Америки"];
// const writeCountryName = findName(countryNames);
// console.log(writeCountryName);


// / 2) *Напишите функцию alphabetOrder(str), которая возвращает переданную строку с буквами в алфавитном порядке.
// Например вызывая функцию  alphabetOrder('alphabetical')
// Ожидаемый результат: 'aaabcehillpt'*/

// function alphabetOrder(str) {
//     return str.split('').sort().join('');
// }

// const String = 'alphabetical';
// const orderedString = alphabetOrder(String);
// console.log(orderedString);


// / 3) *Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.
//     Например: const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// На выходе должно быть: [7,4,7,8]*/

// const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка','арбуз'];

// const vegetableLengths = vegetables.map(vegetable => vegetable.length);

// console.log(vegetableLengths);


//Напишите функцию generateNumbers(start, len), которая генерирует массив заданной длины len,
// заполненный целыми числами, где каждое число больше предыдущего на единицу.
//     Например вызывая функцию generateNumbers(0, 5)
// Ожидаемый результат: [0,1,2,3,4]
// generateNumbers(-5, 4)  // -> [-5,-4,-3,-2]//

// function generateNumbers(start, len) {
//     const numbers = [];
//     for (let i = 0; i < len; i++) {
//         numbers.push(start + i);
//     }
//     return numbers;
// }

// const result1 = generateNumbers(0, 5);
// console.log(result1);

// const result2 = generateNumbers(-5, 4);
// console.log(result2);


/*Напишите функцию, которая возвращает новый объект без указанных значений.
const without = (object, ...args) => {
    // Напишите здесь свое решение
}
Например дан объект const data = { a: 1, b: 2, c: 3 } и при вызове функции without(data, 'b', 'c')
Ожидаемые результат: { a: 1 }*/

// const without = (object, ...args) => {
//     const newObj = { ...object };
//     args.forEach(key => delete newObj[key]);
//     return newObj;
// };
//
// const data = { a: 1, b: 2, c: 3 };
// const result = without(data, 'b', 'c');
// console.log(result);
