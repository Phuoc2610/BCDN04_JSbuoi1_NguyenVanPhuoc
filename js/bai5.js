/**
 * khối 1: input
 * số nguyên dương có 2 chữ số
 * num
 * sum
 * unit(số hàng đơn vị)
 * ten(số hàng chục)
 * 
 * Khối 2: các bước xử lý
 * B1: tạo và gán giá trị
 * B2: lấy chữ số hàng chục
 * ten = Math.floor(num/10);
 * B3: lấy chữ số hàng đơn vị
 * unit = num % 10;
 * 
 * Khối 3: output
 * sum
 */
console.log("Bài 5");

var num = 83;
console.log("số nguyên dương có 2 chữ số:" + num);
var unit = 0;
var ten = 0;
var sum = 0;

ten = Math.floor(num/10);
console.log("số hàng chục:" + ten);
unit = num % 10;
console.log("số hàng đơn vị:" + unit);
sum = ten + unit;
console.log("Tổng của 2 chữ số:" + sum);




