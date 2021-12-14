class Student{
    roll_no:number;
    stud_name:string;
    marks:number;

    // acceptDetails(id:number,sname:string,marks:number):void{
    //         this.roll_no=id;
    //         this.stud_name=sname;
    //         this.marks=marks;
    // }
constructor(id:number,sname:string,mk:number)
{
    this.roll_no=id;
    this.stud_name=sname;
    this.marks=mk;
}


    display():void{
        console.log(this.roll_no+" "+this.stud_name+" "+this.marks);
    }

    show():string{
        return "hi i am show";
    }

}
  
let stud=new Student(122,'Rajiv',89);

//stud.acceptDetails(300,'Rahul',67);
stud.display();
console.log(stud.show());

