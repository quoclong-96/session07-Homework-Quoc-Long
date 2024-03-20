// Yêu cầu người dùng nhập điểm các môn
let mathScore = parseFloat(prompt("Nhập điểm môn Toán:"));
let literatureScore = parseFloat(prompt("Nhập điểm môn Văn:"));
let englishScore = parseFloat(prompt("Nhập điểm môn Anh:"));

// Tính điểm trung bình
let everageScore = (mathScore + literatureScore + englishScore) / 3;

// Hiển thị điểm trung bình
console.log(
    "Điểm trung bình các môn học của bạn là: " + everageScore.toFixed(1)
);

// Xếp loại
if (everageScore >= 8.0 && everageScore <= 10) {
    console.log("Xếp loại: GiỎI");
} else if (everageScore >= 6.5 && everageScore <= 7.9) {
    console.log("Xếp loại: KHÁ");
} else if (everageScore >= 5.0 && everageScore <= 6.4) {
    console.log("Xếp loại: TRUNG BÌNH");
} else {
    console.log("Xếp loại: YẾU");
}

// Cả hai hàm parseFloat() và parseInt() trong JavaScript đều được sử dụng để chuyển đổi chuỗi thành số, nhưng chúng có một số điểm khác biệt:

// Chức năng chính:

// parseFloat(): Chuyển đổi một chuỗi thành một số dấu phẩy động (floating-point number). Nó cho phép chứa các ký tự số, dấu thập phân và dấu "e" để biểu diễn số mũ.
// parseInt(): Chuyển đổi một chuỗi thành một số nguyên (integer). Nó chỉ chấp nhận các ký tự số và có thể chuyển đổi từ một hệ cơ số cụ thể nếu được chỉ định.
// Dấu phẩy động và số nguyên:

// parseFloat() trả về số dấu phẩy động.
// parseInt() trả về số nguyên.
// Xử lý dấu thập phân:

// parseFloat() chấp nhận dấu thập phân và trả về số dấu phẩy động.
// parseInt() sẽ cắt bỏ phần dấu thập phân của số và chỉ trả về phần số nguyên.
