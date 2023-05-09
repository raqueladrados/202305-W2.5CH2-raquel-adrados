import { Character } from "./character";

describe("Given Character class", () => {
  describe("When we instanciate it", () => {
    test("Then should have an object with properties of the class", () => {
      const character = new Character();

      expect(character).toHaveProperty("name");
      expect(character).toHaveProperty("family");
      expect(character).toHaveProperty("age");
      expect(character).toHaveProperty("status");
      expect(character).toHaveProperty("series");
    });
  });
});
