describe("Instance Of", () => {
  class Employee {}
  class Manager {}

  const fandi = new Employee();
  const arfa = new Manager();

  it("should have problem using typeof", () => {
    console.info(typeof fandi);
    console.info(typeof arfa);
    // keduanya hasilnya object, jadi belum jelas classnya apa
  });

  it("should support instanceof", () => {
    expect(fandi instanceof Employee).toBe(true);
    expect(fandi instanceof Manager).toBe(false);

    expect(arfa instanceof Employee).toBe(false);
    expect(arfa instanceof Manager).toBe(true);
  });
});
