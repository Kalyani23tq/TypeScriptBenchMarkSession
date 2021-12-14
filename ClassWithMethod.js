var Student = /** @class */ (function () {
    // acceptDetails(id:number,sname:string,marks:number):void{
    //         this.roll_no=id;
    //         this.stud_name=sname;
    //         this.marks=marks;
    // }
    function Student(id, sname, mk) {
        this.roll_no = id;
        this.stud_name = sname;
        this.marks = mk;
    }
    Student.prototype.display = function () {
        console.log(this.roll_no + " " + this.stud_name + " " + this.marks);
    };
    Student.prototype.show = function () {
        return "hi i am show";
    };
    return Student;
}());
var stud = new Student(122, 'Rajiv', 89);
//stud.acceptDetails(300,'Rahul',67);
stud.display();
console.log(stud.show());
