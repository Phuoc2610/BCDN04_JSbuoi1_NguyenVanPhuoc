/**
 * khối 1: input
 * chieuDai
 * chieuRong
 * dienTich
 * chuVi
 * 
 * Khối 2: các bước xử lý
 * B1: tạo và gán giá trị
 * B2: xây dựng công thức tính diện tích HCN
 * dienTich = chieuDai * chieuRong;
 * B3: xây dựng công thức tính chu vi HCN
 * chuVi = (chieuDai + chieuRong) * 2;
 * 
 * Khối 3: output
 * dienTich
 * chuVi
 */
 console.log("Bài 4");

var chieuDai = 5;
console.log("Chiều dài HCN:" + chieuDai);
var chieuRong = 3;
console.log("Chiều rộng HCN:" + chieuRong);
var dienTich = 0;
var chuVi = 0;

dienTich = chieuDai * chieuRong;
console.log("diện tích HCN:" + dienTich);
chuVi = (chieuDai + chieuRong) * 2;
console.log("chu vi HCN:" + chuVi);


