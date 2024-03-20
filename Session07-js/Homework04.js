let number = +prompt("Hãy nhập vào một số bất kỳ");
let allowed = number > 0 ? "số dương" : number < 0 ? "số âm" : "số không";
console.log(`Số bạn nhập là ${allowed}.`);
