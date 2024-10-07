// Represents an employee with basic information such as name, salary, position, and department.
class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }

    // Returns a summary of the employee's details.
    getDetails() {
        return `${this.name} works as a ${this.position} in ${this.department}, earning $${this.salary}.`;
    }
}