import { King } from "./rey";
describe("Given King class", () => {
  describe("When we instanciate it", () => {
    test("Then should have an object with properties of the class", () => {
      const king = new King();

      expect(king).toHaveProperty("name");
      expect(king).toHaveProperty("family");
      expect(king).toHaveProperty("age");
      expect(king).toHaveProperty("status");
      expect(king).toHaveProperty("regnalYears");
    });
  });
});
