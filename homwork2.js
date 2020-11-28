// Bài 1
// Các cuốn sách được chia thành chương và mục, module là tập hợp các từ (hoặc code, tùy từng trường hợp) giống như các chương của 1 cuốn sách, các lập trình viên chia chương trình thành các module.
// Những lợi ích sử dụng module:
// Dễ bảo trì: Theo định nghĩa, một module tự đóng gói. Một module được thiết kế tốt nhắm tới việc làm giảm sự phụ thuộc của các phần trong codebase càng nhiều càng tốt để nó có thể phát triển một cách độc lập. Cập nhật một module dễ dàng hơn nhiều khi module đó liên kết lỏng lẻo với các phần code khác.
// Phân chia không gian tên: Trong Javascript, các biến bên ngoài phạm vi của một hàm cấp cao nhất là toàn cục (nghĩa là mọi người đều có thể truy cập đến nó). Vì vậy, việc bị "ô nhiễm không gian tên", khi các đoạn code hoàn toàn không liên quan đến nhau chia sẻ chung các biến toàn cục, là thường thấy.
// Tính tái sử dụng: Hãy thành thật: chúng ta đều sao chép code mình viết trước đó đến một dự án mới lúc này hay lúc khác. Ví dụ, hãy tưởng tượng bạn sao chép một vài hàm tiện ích bạn viết ở dự án trước cho dự án hiện tại của bạn.
// Import: cho phép nhập các function từ các module khác
// Export: khai báo các variables hoặc funcion cho phép module khác truy cập và sử dụng. Có 2 loại Export:
// Named Export: Sử dụng để xuất nhiều thứ từ 1 module bằng cách thêm keyword export vào khai báo của chúng
// Default Export: Trong Javascript ES6 chỉ cho phép xuất một mặc định cho mỗi file. Default Export có thể cho một function, class hoặc một object.

// Bài 2
class Book {
    id;
    name;
    price;
    publishedDate;

    constructor(_id, _name, _price, _publishedDate) {
        this.id = _id;
        this.name = _name;
        this.price = _price;
        this.publishedDate = _publishedDate;
    };
    update(data) {
        
    };
};

class ComicBook extends Book {
    funny;
    pageNumber;

    constructor(_id, _name, _price, _publishedDate, _funny, _pageNumber) {
        super(id, name, price, publishedDate);
        this.funny = _funny;
        this.pageNumber = _pageNumber;
    };
};

class TextBook extends Book {
    subject;
    grade;

    constructor(_id, _name, _price, _publishedDate, _subject, _grade) {
        super(id, name, price, publishedDate);
        this.subject = _subject;
        this.grade = _grade;
    };
};


class ScienceBook extends Book {
    major;

    constructor(_id, _name, _price, _publishedDate, _major) {
        super(id, name, price, publishedDate);
        this.major = _major;
    };
};


class BookShelf {
    name;
    owner;
    dateModified;

    constructor(_name, _owner, _dateModified) {
        this.name = _name;
        this.owner = _owner;
        this.dateModified = _dateModified;
    }
    addBook(book) {

    };
    updateBook(id, data) {

    };
    deleteBook(id) {

    };
    showBooks() {
       
    };
    findBooks(name) {

    };
};

