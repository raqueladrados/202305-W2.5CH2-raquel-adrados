import { Fighter } from "./luchador.js";
describe("Given Fighter class", () => {
  describe("When we instanciate it", () => {
    test("Then should have an object with properties of the class", () => {
      const fighter = new Fighter();

      expect(fighter).toHaveProperty("name");
      expect(fighter).toHaveProperty("family");
      expect(fighter).toHaveProperty("age");
      expect(fighter).toHaveProperty("status");
      expect(fighter).toHaveProperty("weapon");
      expect(fighter).toHaveProperty("skill");
    });
  });
});
