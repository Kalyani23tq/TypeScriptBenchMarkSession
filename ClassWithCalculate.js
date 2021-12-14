var Student = /** @class */ (function () {
    function Student(rollno, sname, m1, m2, m3) {
        this.rollno = rollno;
        this.stud_name = sname;
        this.math = m1;
        this.phy = m2;
        this.che = m3;
    }
    Student.prototype.calculate = function () {
        this.per = (this.math + this.phy + this.che) / 3;
        // console.log(this.per);
    };
    Student.prototype.display = function () {
        console.log("RollNo" + " " + "StudName" + " " + "Math" + " " + " PHY" + " " + "Che" + "   PER");
        console.log(this.rollno + "     " + this.stud_name + "    " + this.math + "     " + this.phy + "    " + this.che + "     " + this.per);
    };
    return Student;
}());
var stud = new Student(1, 'Ashish', 67, 56, 78);
stud.calculate();
stud.display();
