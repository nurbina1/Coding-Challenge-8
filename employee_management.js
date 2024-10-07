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

// Represents a department, managing a list of employees and calculating total salaries.
class Department {
    constructor(name) {
        this.name = name;
        this.employees = []; // Stores the employees belonging to the department
    }

    // Adds an employee to the department's employee list.
    addEmployee(employee) {
        this.employees.push(employee);
    }

    // Calculates the total salary of all employees in the department.
    getDepartmentSalary() {
        return this.employees.reduce((total, employee) => total + employee.salary, 0);
    }
}

//Create Manager class with inheritance from Employee
class Manager extends Employee {
    constructor(name, salary, position, department, bonus) {
        super(name, salary, position, department);  // Call Employee constructor
        this.bonus = bonus;  // Additional property for manager's bonus
    }

    // Override the getDetails method to include bonus information
    getDetails() {
        return `${super.getDetails()} They also receive a bonus of $${this.bonus}.`;
    }
}