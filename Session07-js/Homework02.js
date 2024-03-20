let number = +prompt("Nhập một số bất kỳ");
console.log(typeof number);

if (number % 2 === 0) {
    console.log(number + " là số chẵn");
} else if (number % 3 === 0) {
    console.log(number + " là số lẽ");
} else {
    console.log("Không hợp lệ");
}
