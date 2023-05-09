import { Fighter } from "./luchador.js";
describe("Given Fighter class", () => {
  describe("When we instanciate it", () => {
    test("Then should have an object with properties of the class", () => {
      const fighter = new Fighter(
        "Jaime Lannister",
        "Lannister",
        34,
        "alive",
        "sword",
        8
      );

      expect(fighter).toHaveProperty("name", "Jaime Lannister");
      expect(fighter).toHaveProperty("family", "Lannister");
      expect(fighter).toHaveProperty("age", 34);
      expect(fighter).toHaveProperty("status", "alive");
      expect(fighter).toHaveProperty("weapon", "sword");
      expect(fighter).toHaveProperty("skill", 8);
    });
  });
});
