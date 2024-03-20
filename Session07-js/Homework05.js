//Cách 1

let thang = parseInt(prompt("Nhập số tháng trong năm (từ 1 đến 12):"));

switch (thang) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Tháng có 31 ngày");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Tháng có 30 ngày");
        break;
    case 2:
        let nam = new Date().getFullYear();
        if ((nam % 4 == 0 && nam % 100 != 0) || nam % 400 == 0) {
            console.log("Tháng có 29 ngày - Năm nhuận");
        } else {
            console.log("Tháng có 28 ngày - Không phải năm nhuận");
        }
        break;
    default:
        console.log("Không hợp lệ - Vui lòng nhập số từ 1 đến 12 !");
        break;
}

//Cách 2
// let thang = parseInt(prompt("Nhập số tháng trong năm (từ 1 đến 12):"));

// // Kiểm tra xem tháng có hợp lệ hay không (trong phạm vi từ 1 đến 12)
// if (thang >= 1 && thang <= 12) {
//     let soNgay;
//     switch (thang) {
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12:
//             soNgay = 31;
//             break;
//         case 4:
//         case 6:
//         case 9:
//         case 11:
//             soNgay = 30;
//             break;
//         case 2:
//             // Kiểm tra năm nhuận
//             let nam = new Date().getFullYear();
//             if ((nam % 4 == 0 && nam % 100 != 0) || nam % 400 == 0) {
//                 soNgay = 29;
//             } else {
//                 soNgay = 28;
//             }
//             break;
//     }
//     console.log(`Tháng ${thang} có ${soNgay} ngày.`);
// } else {
//     console.log("Tháng không hợp lệ. Vui lòng nhập số từ 1 đến 12.");
// }
