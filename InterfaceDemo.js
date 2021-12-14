var MyBook = /** @class */ (function () {
    function MyBook(book_id, bookname, author, price) {
        this.book_id = book_id;
        this.book_name = bookname;
        this.author = author;
        this.price = price;
    }
    MyBook.prototype.CreateBook = function () {
        for (var i = 1; i < 3; i++) {
            this.book = [
                {
                    "bookid": this.book_id,
                    "bookName": this.book_name,
                    "author": this.author,
                    "price": this.price
                }
            ];
        }
    };
    MyBook.prototype.ListDetails = function () {
        console.log("I am from Interface...");
        console.log(this.book);
    };
    return MyBook;
}());
for (var j = 1; j <= 2; j++) {
    var my = new MyBook(200, 'JAVA', 'kalyani', 500);
    my.CreateBook();
    my.ListDetails();
}
