describe("Parameter Properties", () => {
  class Person {
    // FROM THIS
    // name: string;
    // constructor(name: string) {
    //   this.name = name
    // }
    //
    // TO THIS
    constructor(public name: string) {}
  }

  it("should support", () => {
    const person = new Person("Fandi");
    console.info(person.name);
  });
});
