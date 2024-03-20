// //Phân biệt giữa câu lệnh điều kiện If else và Switch case

// 1. Trong TH muốn so sánh tính đúng sai, dấu hiệu là các toán tử >=, <=, !==, ===, % ... --> Sử dụng If else
// 2.Còn trong TH đã được hoặc biết trước các giá trị  ví dụ như một tuần có 7 ngày gồm thứ 2 đến chủ nhật, 1 tháng có 28,29,30 hoặc 31 ngày...--> Sử dụng switch case
// Lưu ý: Nếu số lượng ít hơn 3 case thì nên sử dụng If else

// Ví dụ:
// 1. If else

// let number = +prompt("Nhập một số bất kỳ");
// console.log(typeof number);

// if (number % 2 === 0) {
//   console.log(number + " là số chẵn");
// } else {
//   console.log(number + " là số lẽ");
// }

// 2. Switch case

// let day = +prompt("Mời bạn nhập vào một số từ 2 đến 8");

// switch (day) {
//   case 2:
//       console.log("Monday");
//       break;
//   case 3:
//       console.log("Tuesday");
//       break;
//   case 4:
//       console.log("Wednesday");
//       break;
//   case 5:
//       console.log("Thursday");
//       break;
//   case 6:
//       console.log("Friday");
//       break;
//   case 7:
//       console.log("Saturday");
//       break;
//   case 8:
//       console.log("Sunday");
//       break;
//   default:
//       console.log("Lua chon chua hop le");
//       break;
// }
