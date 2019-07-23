## So sánh ES5 - ES6

ES (ECMASCript) : Là 1 ngôn ngữ chuẩn hoá, JS là cài đặt cụ thể của ES, phát triển qua các phiên bản

- ES5 là phiên bản thứ 5 của ES
  + Được hỗ trợ hầu hết bởi các trình duyệt hiện đại
  + Sử dung lập trình hàm để là tiêu chuẩn cho JS
  + Mềm dẻo và dễ dàng 
  + Khó debug, các công cụ hỗ trợ cho debug trong JS ít và khá phức tạp
- ES6 (ES2015) là phiên bản thứ 6 của ES , có nhiều tính năng, khái niệm mới  so với ES5
  + Được bổ sung thêm cú pháp mới quan trọng cho việc viết các ứng dụng phức tạp, bao gồm classes và modules.
  + Các tính năng mới khác nổi bật như :
  	1. Block - Scoped Constructs Let and Cont
  	2. Arrow Function
  	3. Rest Parameter
  	4. Destructuring Assignment in ES6
  	5. Default Parameters in ES6
  	6. Template Literals in ES6
  	7. Multi-line String in ES6
  	8. Enhanced Object Literals in ES6
  	9. Promises in ES6
  	10. Classes in ES6 
  	...
  + Do có nhiều tính năng mới nên nhiều trình duyệt chưa hỗ trợ


## So sánh XMLHttpRequest - Fetch
Đều gửi và nhận request ajax đến server.
- XMLHttpRequest gửi HTTP request đến server và hỗ trợ hai kiểu request: đồng bộ và bất đồng bộ, nên sử dụng kiểu bất đồng bộ.
  + Tất cả các request sẽ gửi lên cooki để xác thực
  + Hỗ trợ trên tất cả các trình duyệt hiện đại như (Chrome, IE7+, FireFox, Safari và Opera) 
- Fetch : code đơn giản, gọn gàng, dễ hiểu hơn
  + Hđộng trong các trình duyệt mới nó không hoạt động trên Internet Explorer, những phiên bản của Chrome, Firefox và Safari cũ hơn 2017 có thể gặp vấn đề.
  + Đc thiết kế trên nền tảng Promis, tránh đc callback.
  + Response trả về có nhiều metadata: header, status, type, url,..
  + Fetch API là một chuẩn mới giúp tạo ra giao thức thống nhất để truy xuất tài nguyền. Fetch đc thiết kế theo kiểu Promise, giúp người dùng tránh callbacks và cũng giúp xâu chuỗi promise khi xử lý. Fetch API cung cấp Request](https://fetch.spec.whatwg.org/#requests), Response, Body và Status object giúp người dùng tương tác hiệu quả với thông tin trả về. Hiện hành các trình duyệt mới đều hỗ trợ nhưng nếu bạn phải hỗ trợ các bản cũ thì có thể sử dụng các thư viện polyfill.
  + Ko phaỉ tất cả các  request của fetch sẽ gửi cookie để xác thực như XMLHttpRequest
  + Lỗi như 404 Page not Found không làm cho Fetch promise bị reject(từ chối), fetch chỉ reject nếu request ko thể hoàn thành như lỗi mạng => Khó khăn trong cài đặt bắt lỗi
  + Fetch ko hỗ trợ timeouts, ko hỗ trợ các sự kiện progess=> ko thể báo cáo trạng thái tệp tải lên hoặc gửi form lớn.

## VD fetch trên codepen
https://codepen.io/honggamxd/

