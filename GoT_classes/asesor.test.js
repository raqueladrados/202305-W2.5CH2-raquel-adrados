import { Counselor } from "./asesor";
describe("Given Character class", () => {
  describe("When we instanciate it", () => {
    test("Then should have an object with properties of the class", () => {
      const counselor = new Counselor();

      expect(counselor).toHaveProperty("name");
      expect(counselor).toHaveProperty("family");
      expect(counselor).toHaveProperty("age");
      expect(counselor).toHaveProperty("status");
      expect(counselor).toHaveProperty("characterAdvises");
    });
  });
});
