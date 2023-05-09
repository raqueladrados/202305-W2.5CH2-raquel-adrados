import { Character } from "./character.js";
export class Fighter extends Character {
  weapon;
  skill;
  constructor(name, family, age, status, weapon, skill) {
    super(name, family, age, status);
    this.skill = skill;
    this.weapon = weapon;
  }
}
