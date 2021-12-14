class Student
{
    rollno:number;
    stud_name:string;
    math:number;
    phy:number;
    che:number;
    per:number;
    constructor(rollno:number,sname:string,m1:number,m2:number,m3:number)
    {
        this.rollno=rollno;
        this.stud_name=sname;
        this.math=m1;
        this.phy=m2;
        this.che=m3;
    }

    calculate():void{
        this.per=(this.math+this.phy+this.che)/3;
       // console.log(this.per);
    }
    display():void{

       console.log("RollNo"+" "+"StudName"+" "+"Math"+" "+" PHY"+" "+"Che"+"   PER"); 
console.log(this.rollno+"     "+this.stud_name+"    "+this.math+"     "+this.phy+"    "+this.che+"     "+this.per)
    }

}

let stud=new Student(1,'Ashish',67,56,78);
stud.calculate();
stud.display();