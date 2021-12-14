class Employee
{
    id:number=101;
    emp_name:string='Amit';
    salary:number=56000;


    display():void{
        console.log(this.id+" "+this.emp_name+" "+this.salary);
    }

}

let emp=new Employee();
emp.display();