var Employee = /** @class */ (function () {
    function Employee() {
        this.id = 101;
        this.emp_name = 'Amit';
        this.salary = 56000;
    }
    Employee.prototype.display = function () {
        console.log(this.id + " " + this.emp_name + " " + this.salary);
    };
    return Employee;
}());
var emp = new Employee();
emp.display();
