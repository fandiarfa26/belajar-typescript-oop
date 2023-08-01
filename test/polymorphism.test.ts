describe("Polymorphism", () => {
  class Employee {
    constructor(public name: string) {}
  }

  class Manager extends Employee {}

  class VicePresident extends Manager {}

  function sayHello(employee: Employee) {
    if (employee instanceof VicePresident) {
      const vp = employee as VicePresident;
      console.info(`Hello VP ${vp.name}`);
    } else if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.info(`Hello Manager ${manager.name}`);
    } else {
      console.info(`Hello Employee ${employee.name}`);
    }

    /**
     * Pengecekan instanceof harus dimulai dari class turunan terakhir
     * karena instanceof bernilai true jika class tersebut juga turunannya
     */
  }

  function sayHelloWrong(employee: Employee) {
    if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.info(`Hello Manager ${manager.name}`);
    } else if (employee instanceof VicePresident) {
      const vp = employee as VicePresident;
      console.info(`Hello VP ${vp.name}`);
    } else {
      console.info(`Hello Employee ${employee.name}`);
    }
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
    sayHello(new Manager("Arfa"));
    sayHello(new VicePresident("Buma"));
  });

  it("should support method parameter polymorphism wrong", () => {
    sayHelloWrong(new Employee("Fandi"));
    sayHelloWrong(new Manager("Arfa"));
    sayHelloWrong(new VicePresident("Buma")); // ini akan dianggap sbg Manager
  });
});
