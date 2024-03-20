let a = +prompt("Nhap so thu nhat, (a): ");
// console.log(typeof a);
let b = +prompt("Nhap so thu hai, (b): ");
// console.log(typeof b);
let c = +prompt("Nhap so thu ba, (c): ");
// console.log(typeof c);

// let max;

// if (a >= b && a >= c) {
//     max = a;
// } else if (b >= a && b >= c) {
//     max = b;
// } else {
//     max = c;
// }

//console.log("Số lớn nhất là: " + max);

//Cách 2
if (a >= b && a >= c) {
    console.log("Số lớn nhất là: " + a);
} else if (b >= a && b >= c) {
    console.log("Số lớn nhất là: " + b);
} else {
    console.log("Số lớn nhất là: " + c);
}
