describe("Method Overriding", () => {
  class Employee {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello(name: string) {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }

  class Manager extends Employee {
    sayHello(name: string) {
      console.info(
        `Hello ${name}, my name is ${this.name}, i am your manager.`
      );
    }
  }

  it("should support", () => {
    const employee = new Employee("Fandi");
    employee.sayHello("Mitha");

    const manager = new Manager("Fandi");
    manager.sayHello("Mitha");
  });
});
