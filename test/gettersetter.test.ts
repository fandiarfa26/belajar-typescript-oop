describe("Getter and Setter", () => {
  class Category {
    _name?: string;

    get name(): string {
      if (this._name) {
        return this._name;
      } else {
        return "empty";
      }
    }

    set name(value: string) {
      if (value !== "") {
        this._name = value;
      }
    }
  }

  it("should support in class", () => {
    const category = new Category();
    expect(category.name).toBe("empty");

    category.name = "Food";
    expect(category.name).toBe("Food");

    category.name = "";
    expect(category.name).toBe("Food");
  });
});
