import { Counselor } from "./asesor";
describe("Given Character class", () => {
  describe("When we instanciate it", () => {
    test("Then should have an object with properties of the class", () => {
      const counselor = new Counselor(
        "Tyrion Lannister",
        "Lannister",
        45,
        "alive",
        "Daenerys"
      );

      expect(counselor).toHaveProperty("name", "Tyrion Lannister");
      expect(counselor).toHaveProperty("family", "Lannister");
      expect(counselor).toHaveProperty("age", 45);
      expect(counselor).toHaveProperty("status", "alive");
      expect(counselor).toHaveProperty("characterAdvises", "Daenerys");
    });
  });
});
