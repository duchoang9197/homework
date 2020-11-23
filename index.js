// Bài 1 OOP
// Khái niệm: Là thiết kế hướng đối tượng trong JS cho phép lập trình viên tạo ra các đối tượng trong code trừu tượng hóa các đối tượng.
// Tính chất:
// Tính đóng gói (Encapsulation): Các dữ liệu và phương thức có liên quan với nhau được đóng gói thành các lớp để tiện cho việc quản lý và sử dụng. Tức là mỗi lớp được xây dựng để thực hiện một nhóm chức năng đặc trưng của riêng lớp đó. Ngoài ra, đóng gói còn để che giấu một số thông tin và chi tiết cài đặt nội bộ để bên ngoài không thể nhìn thấy.
// VD:khi bạn muốn rút tiền từ tài khoản ngân hàng của bạn (giả thiết rằng bạn tới phòng giao dịch của ngân hàng để rút mà không sử dụng máy ATM). Và khi tới ngân hàng thì nhân viên ở đó sẽ yêu cầu bạn cung cấp các giấy tờ liên quan để kiểm tra thông tin trước khi rút tiền cho bạn. Như vậy ở đây bạn không trực tiếp rút tiền từ tài khoản của mình mà phải thông qua nhân viên ngân hàng (khác với trường hợp bạn để tiền trong ví bạn luôn có thể trực tiếp lấy tiền ra bất cứ lúc nào).

// Tính kế thừa (Inheritance): Nó cho phép xây dựng một lớp mới dựa trên các định nghĩa của lớp đã có. Có nghĩa là lớp cha có thể chia sẽ dữ liệu và phương thức cho các lớp con. Các lớp con khỏi phải định nghĩa lại, ngoài ra có thể mở rộng các thành phần kế thừa và bổ sung thêm các thành phần mới. Tái sử dụng mã nguồn 1 cách tối ưu, tận dụng được mã nguồn. Một số loại kế loại kế thừa thường gặp: đơn kế thừa, đa kế thừa, kế thừa đa cấp, kế thừa thứ bậc.
// VD: Con chó và 1 giống chó. Tất cả loài có đều có 4 chân và có thể sủa. 1 giống chó cụ thể là pitbull
    
// Tính đa hình (Polymorphism): Tính đa hình là một hành động có thể được thực hiện bằng nhiều cách khác nhau. Đây lại là một tính chất có thể nói là chứa đựng hầu hết sức mạnh của lập trình hướng đối tượng.
//  VD: Một người cùng một lúc có thể có đặc điểm khác nhau. Giống như một người đàn học sinh thời là một người con trai, một người bạn, một người anh. Vì vậy, cùng một người sở hữu những hành vi khác nhau trong các tình huống khác nhau. Điều này được gọi là đa hình.


// Tính trừu tượng (Abstraction): Trừu tượng có nghĩ là tổng quát hóa một cái gì đó lên, không cần chú ý chi tiết bên trong. Nó không màng đến chi tiết bên trong là gì và người ta vẫn hiểu nó mỗi khi nghe về nó.
// VD: Quản lý sinh viên chỉ cần: họ tên, ngày sinh, giới tính,... mà không cần: màu tóc, chiều cao,... vì những thứ đó không cần thiết

// Bài 2
// let num = [2, 8, 9, 55, 14, 89, 23, 103, 999, 17, 41, 11];
// for (let i = 0; i < num.length; i++) {
//     let x = true;
//     if (num[i] < 2) {
//         x = false
//     }
//     else if (num[i] == 2) {
//         x = true;
//     }
//     else if (num[i] % 2 == 0) {
//         x = false;   
//     }
//     else {
//         for (let a = 3; a < num[i]; a += 2) {
//             if (num[i] % a == 0) {
//                 x = false;
//             }
//         };
//     };
//     console.log(x == true);
// };


