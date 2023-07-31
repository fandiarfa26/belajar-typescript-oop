describe("Inheritance", () => {
  class Employee {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class Manager extends Employee {}

  class Director extends Manager {}

  it("should support", () => {
    const employee = new Employee("Baihaqi");
    console.info(employee.name);

    const manager = new Manager("Amel");
    console.info(manager.name);

    const director = new Director("Indah");
    console.info(director.name);
  });
});
