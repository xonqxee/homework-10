// Завдання 1
// var numbers = [1,2,3,4,5,6,7,8,9,10,11,12];

// for (var i = 0; i < numbers.length; i++) {
//     var currentNumber = numbers[i];

//     if (currentNumber > 3 && currentNumber < 10) {
//         console.log(currentNumber);
//     }
// }

// Завдання 2
// var numbers = [1, 2, 5, 9, 4, 13, 4, 10];
// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] === 4) {
//         console.log('Наявний!');
//         break;
//     }
// }
 
// Завдання 3
// var mass = [42, 2, 33, 11, 12, 10, 0];
// var sum = mass.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 0);
// var average = Math.floor(sum / mass.length);
// console.log(average);

// Завдання 4
// var words = ["parrot", "bull", "bear", "monkey"];
// var totalLength = words.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue.length;
// }, 0);
// console.log(totalLength);

// Завдання 5
// var mixedArray = ["parrot", 140, "bull", true, 0, "bear", 47, "monkey"];
// var stringArray = mixedArray.filter(function (element) {
//     return typeof element === 'string';
// });

// console.log(stringArray);