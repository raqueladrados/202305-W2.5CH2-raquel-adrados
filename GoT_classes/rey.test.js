import { King } from "./rey";
describe("Given King class", () => {
  describe("When we instanciate it", () => {
    test("Then should have an object with properties of the class", () => {
      const king = new King("Daenerys", "Targaryen", 28, "alive", 12);

      expect(king).toHaveProperty("name", "Daenerys");
      expect(king).toHaveProperty("family", "Targaryen");
      expect(king).toHaveProperty("age", 28);
      expect(king).toHaveProperty("status", "alive");
      expect(king).toHaveProperty("regnalYears", 12);
    });
  });
});
