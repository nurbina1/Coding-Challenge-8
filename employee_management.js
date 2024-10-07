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

    // Method to calculate total salary including bonuses for managers
    calculateTotalSalaryWithBonus() {
        return this.employees.reduce((total, employee) => {
            if (employee instanceof Manager) {
                return total + employee.salary + employee.bonus;  // Add bonus if employee is a Manager
            }
            return total + employee.salary;  // Otherwise, just add salary
        }, 0);
    }
}

// Create Manager class with inheritance from Employee
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

// Create departments
const engineering = new Department("Engineering");
const marketing = new Department("Marketing");

// Create employees and managers
const alice = new Employee("Alice", 80000, "Developer", "Engineering");
const charlie = new Manager("Charlie", 120000, "Engineering Manager", "Engineering", 20000);
const bob = new Employee("Bob", 75000, "Designer", "Marketing");
const diana = new Manager("Diana", 130000, "Marketing Manager", "Marketing", 25000);

// Add employees to departments
engineering.addEmployee(alice);  
engineering.addEmployee(charlie);
marketing.addEmployee(bob);
marketing.addEmployee(diana);

// Calculate total salary for each department
console.log(`Total salary for Engineering: $${engineering.getDepartmentSalary()}`); 
console.log(`Total salary with bonuses for Engineering: $${engineering.calculateTotalSalaryWithBonus()}`); 

console.log(`Total salary for Marketing: $${marketing.getDepartmentSalary()}`); 
console.log(`Total salary with bonuses for Marketing: $${marketing.calculateTotalSalaryWithBonus()}`); 

// Expected Output:
// Total salary for Engineering: $200000
// Total salary with bonuses for Engineering: $220000
// Total salary for Marketing: $205000
// Total salary with bonuses for Marketing: $230000
