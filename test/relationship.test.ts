describe("Relationship", () => {
  class Person {
    constructor(public name: string) {}
  }

  class Customer {
    constructor(public name: string) {}
  }

  it("should support", () => {
    const person: Person = new Customer("Fandi");
    console.info(person.name);
    // bisa aja tapi tidak disarankan karena membingungkan programmer
  });
});
