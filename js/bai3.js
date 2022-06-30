/**
 * khối 1: input
 * giaUSD
 * soUSD
 * tienQuyDoi
 * 
 * Khối 2: các bước xử lý
 * B1: tạo và gán giá trị
 * B2: xây dựng công thức tính giá trị trung bình
 * tienQuyDoi = giaUSD * soUSD;
 * 
 * Khối 3: output
 * tienQuyDoi
 */
 console.log("Bài 3");

var giaUSD = 23.500;
console.log("giá USD hiện nay đang là:" + giaUSD +"00 VND");
var soUSD = 2;
console.log("số USD cần đổi là:" + soUSD);
var tienQuyDoi = 0;

tienQuyDoi = giaUSD * soUSD;
console.log("Số tiền sau khi quy đổi VND:" + tienQuyDoi + ".000 VND");