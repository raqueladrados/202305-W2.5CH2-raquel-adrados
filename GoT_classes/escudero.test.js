import { Squire } from "./escudero";
describe("Given Squire class", () => {
  describe("When we instanciate it", () => {
    test("Then should have an object with properties of the class", () => {
      const squire = new Squire(
        "Bronn",
        "Stokeworth",
        32,
        "alive",
        "Tyrion Lannister",
        3
      );

      expect(squire).toHaveProperty("name", "Bronn");
      expect(squire).toHaveProperty("family", "Stokeworth");
      expect(squire).toHaveProperty("age", 32);
      expect(squire).toHaveProperty("status", "alive");
      expect(squire).toHaveProperty("characterServes", "Tyrion Lannister");
      expect(squire).toHaveProperty("pelotism", 3);
    });
  });
});
