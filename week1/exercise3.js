class Employee {
  constructor(name, salary, hireDate) {
    this.name = name
    this.salary = salary
    this.hireDate = hireDate //"01/01/2015"
  }
  toString() {
    return `Employee: ${this.name}, Salary: ${this.salary}, Hire Date: ${this.hireDate}.\n`
  }
}

class Manager extends Employee {
  constructor(
    name,
    salary,
    hireDate,
    jobTitle,
    descriptionOfJob,
    employeesManaged
  ) {
    super(name, salary, hireDate)
    this.jobTitle = jobTitle
    this.descriptionOfJob = descriptionOfJob //"Manager of the Sales Department"
    this.employeesManaged = employeesManaged
  }
  toString() {
    return super.toString() + `Job Title: ${this.jobTitle}, Description of Job: ${this.descriptionOfJob}, Employees managed: ${this.employeesManaged}.\n`
  }
}

class Department extends Manager {
  constructor(
    name,
    salary,
    hireDate,
    jobTitle,
    descriptionOfJob,
    employeesManaged,
    departmentName,
    employees
  ) {
    super(
      name,
      salary,
      hireDate,
      jobTitle,
      descriptionOfJob,
      employeesManaged
    )
    this.departmentName = departmentName
    this.employees = employees // ["Steve", "Marc"]
  }
  toString() {
    return super.toString() + `Department Name: ${this.departmentName}, Employees: ${this.employees}`
  }
}

const department1 = new Department(
  "Steve Taylor",
  50000,
  "01/01/2015",
  "Manager",
  "Manager of the Sales Department",
  2,
  "Sales",
  ["Steve", "Marc"]
)

console.log(department1.toString())
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const employee = new Employee("Steve Taylor", 50000, "01/01/2015")
for (const i in numbers) {
  console.log(i)
}
for (const key in employee) {
  console.log(employee[key])
}

const calculator = (...numbers) => {
  let result = 0
  for (const number of numbers) result += number
  console.log(result)
}

calculator(1, 512, 59)

const manager = new Manager("Steve Taylor", 50000, "01/01/2015", "Manager", "Manager of the Sales Department", ["Steve", "Marc"])
const { jobTitle, descriptionOfJob} = manager
console.log(`Job Title: ${jobTitle}, Description of Job: ${descriptionOfJob}`)
