import { Squire } from "./escudero";
describe("Given Squire class", () => {
  describe("When we instanciate it", () => {
    test("Then should have an object with properties of the class", () => {
      const squire = new Squire();

      expect(squire).toHaveProperty("name");
      expect(squire).toHaveProperty("family");
      expect(squire).toHaveProperty("age");
      expect(squire).toHaveProperty("status");
      expect(squire).toHaveProperty("characterServes");
      expect(squire).toHaveProperty("pelotism");
    });
  });
});
