let a = parseFloat(prompt("Nhập số thứ nhất (a):"));
let b = parseFloat(prompt("Nhập số thứ hai (b):"));
let c = parseFloat(prompt("Nhập số thứ ba (c):"));

if (a <= b && a <= c) {
    if (b <= c) {
        console.log("Số theo thứ tự tăng dần:", a, b, c);
    } else {
        console.log("Số theo thứ tự tăng dần:", a, c, b);
    }
} else if (b <= a && b <= c) {
    if (a <= c) {
        console.log("Số theo thứ tự tăng dần:", b, a, c);
    } else {
        console.log("Số theo thứ tự tăng dần:", b, c, a);
    }
} else {
    if (a <= b) {
        console.log("Số theo thứ tự tăng dần:", c, a, b);
    } else {
        console.log("Số theo thứ tự tăng dần:", c, b, a);
    }
}

//TH theo thứ tự giảm dần
// if (a >= b && a >= c) {
//   if (b >= c) {
//       console.log("Số theo thứ tự giảm dần:", a, b, c);
//   } else {
//       console.log("Số theo thứ tự giảm dần:", a, c, b);
//   }
// } else if (b >= a && b >= c) {
//   if (a >= c) {
//       console.log("Số theo thứ tự giảm dần:", b, a, c);
//   } else {
//       console.log("Số theo thứ tự giảm dần:", b, c, a);
//   }
// } else {
//   if (a >= b) {
//       console.log("Số theo thứ tự giảm dần:", c, a, b);
//   } else {
//       console.log("Số theo thứ tự giảm dần:", c, b, a);
//   }
// }
