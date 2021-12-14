interface IBook
{
    ListDetails():void;
}
class MyBook implements IBook{

book_id:number;
book_name:String;
author:string;
price:number;
 book:any;
constructor(book_id,bookname,author,price)
{
    this.book_id=book_id;
    this.book_name=bookname;
    this.author=author;
    this.price=price;
}

CreateBook():void{
    for(let i=1;i<3;i++)
    {
        this.book=[
            {
                "bookid":this.book_id,
                "bookName":this.book_name,
                "author":this.author,
                "price":this.price

            }

        ]

    }

}

ListDetails(): void {
    console.log("I am from Interface...");

    console.log(this.book);

}

}

for(let j=1;j<=2;j++)
{
let my=new MyBook(200,'JAVA','kalyani',500);
my.CreateBook();
my.ListDetails();
}