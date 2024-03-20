let namSinh = Number(prompt("Bạn sinh năm bao nhiêu?"));

// Kiểm tra xem câu trả lời có phải là một số hay không
if (!isNaN(namSinh)) {
    // Tính số tuổi của người dùng
    let namHienTai = new Date().getFullYear();
    let tuoi = namHienTai - parseInt(namSinh);

    console.log("Tuổi của bạn là: " + tuoi);
} else {
    console.log("Giá trị không hợp lệ. Vui lòng nhập vào một số năm.");
}
