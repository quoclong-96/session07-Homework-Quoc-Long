//Câu lệnh if
//Được sử dụng trong trường hợp chương trình chỉr có 1 điều kiện duy nhất
//Phần điều kiện câu lệnh if là nhận giá trị true hoặc false
//Nếu là true phần code bên trong {} sẽ được thực thi, nếu false thì sẽ thoát khỏi cấâu lệnh

let age = 18;
if (age >= 18) {
    //Code bên trong được thực thi
    console.log("Đủ điều kiện thi bằng lái xe");
}

//Câu lệnh if else
//Được sử dụng trong trường hợp chương trình có hai điều kiện
let email = "lqlong@gmail.com"; //hình dung email được lấy từ người dùng
if (email === "lqlong@gmail.com") {
    //Thực thi khi điều kiện đúng
    console.log("Đăng nhập thành công");
} else {
    //Thực thi khi điều kiện sai
    console.log("Đăng nhập thất bại");
}

//Tạo biến number có giá trị là một số tự nhiên, kiểm tra xem number có phải số chẵn không
//Gợi ý: Nếu phần dư của phép tính number % 2 = 0 thì là số chẵn
// let number = 10;

// if (number % 2 === 0) {
//     console.log(number + " là số chẵn");
// } else {
//     console.log(number + "là số lẽ");
// }

//Cách 1
// let number = Number(prompt("Nhập số"));
// console.log(typeof number);

// if (number % 2 === 0) {
//   console.log(number + " là số chẵn");
// } else {
//   console.log(number + "là số lẽ");
// }

//Cách 2
// let number = +prompt("Nhap so");
// console.log(typeof number);
// if (number % 2 === 0) {
//     console.log(number + " là số chẵn");
// } else {
//     console.log(number + " là số lẽ");
// }

//Cách 3
let number = parseInt(prompt("Nhap so"));
console.log(typeof number);
if (number % 2 === 0) {
    console.log(number + " là số chẵn");
} else {
    console.log(number + " là số lẽ");
}

//Câu điều kiện  if -else if - else
//Được sử dụng trong TH có từ 2 điều kiện trở lên
let option = "t";
if (option === "t") {
    console.log("Thuc hien chuc nang them");
} else if (option === "s") {
    console.log("Thuc hien chuc nang sua");
} else if (option === "1") {
    console.log("Thuc hien chuc nang lay du lieu");
} else if (option === "*") {
    console.log("thuc hien chuc nang xoa");
} else {
    console.log("Nhap sai lua chon");
}

//Câu lệnh switch - case
let month = +prompt("Moi ban nhap thang");
//Nguyên lý so sánh: sử dụng toán tử so sánh === với các case
switch (month) {
    case 1:
        console.log("Day la thang 1");
        break;
    case 2:
        console.log("Day la thang 2");
        break;
    case 3:
        console.log("Day la thang 3");
    default:
        console.log("Lua chon chua hop le");
        break;
}
