describe("Polymorphism", () => {
  class Employee {
    constructor(public name: string) {}
  }

  class Manager extends Employee {}

  class VicePresident extends Manager {}

  function sayHello(employee: Employee) {
    console.info(`Hello ${employee.name}`);
  }

  it("should support", () => {
    /**
     * Walaupun dideklarasikannya sbg Employee, tetapi dapat diisi dgn class turunannya
     */
    let employee: Employee = new Employee("Fandi");
    console.info(employee);

    employee = new Manager("Arfa");
    console.info(employee);

    employee = new VicePresident("Mitha");
    console.info(employee);
  });

  it("should support method parameter polymorphism", () => {
    sayHello(new Employee("Fandi"));
    sayHello(new Manager("Fandi"));
    sayHello(new VicePresident("Fandi"));
  });
});
