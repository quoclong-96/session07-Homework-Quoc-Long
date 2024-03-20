//Toán tử toán học / Toán tử số học
let numberA = 10;
let numberB = 20;

//Cách code thông thường
//Vấn đề 1:  giá trị fix cứng
//Vấn đề 2: những logic tính toán thì nên lưu trữ vào bên trong một biến
console.log("10 + 20 = ", numberA + numberB);
console.log("10 - 20 = ", numberA - numberB);
console.log("10 * 20 = ", numberA * numberB);
console.log("10 / 20 = ", numberA / numberB);
console.log("10 % 20 = ", numberA % numberB);

//Giải quyết -> clean code
// Giải quyết vấn đề 2
let sum = numberA + numberB;
let sub = numberA - numberB;
let mult = numberA * numberB;
let adv = numberA / numberB;
let result = numberA % numberB;

//Giải quyết vấn đề 1
console.log(numberA + "+" + numberB + "=" + sum);
console.log(numberA + "-" + numberB + "=" + sub);
console.log(numberA + "*" + numberB + "=" + mult);
console.log(numberA + "/" + numberB + "=" + adv);
console.log(numberA + "%" + numberB + "=" + result);

//Toán tử so sánh
let numberC = 20;
let numberD = 30;
let numberE = "20";

console.log(numberC > numberD);
console.log(numberC < numberD);
console.log(numberC >= numberD);
console.log(numberC <= numberD);
console.log(numberC == numberD);
console.log(numberC === numberD);
