import { Character } from "./character";

export class Counselor extends Character {
  characterAdvises;
  constructor(name, family, age, status, characterAdvises) {
    super(name, family, age, status);
    this.characterAdvises = characterAdvises;
  }
}
