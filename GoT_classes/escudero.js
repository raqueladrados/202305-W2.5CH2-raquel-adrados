import { Character } from "./character";
export class Squire extends Character {
  characterServes;
  pelotism;
  constructor(name, family, age, status, characterServes, pelotism) {
    super(name, family, age, status);
    this.characterServes = characterServes;
    this.pelotism = pelotism;
  }
}
