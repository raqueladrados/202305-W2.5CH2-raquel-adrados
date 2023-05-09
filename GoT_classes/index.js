import { Character } from "./character.js";
import { King } from "./rey.js";
import { Counselor } from "./asesor.js";
import { Squire } from "./escudero.js";
import { Fighter } from "./luchador.js";

const myKing = new King("Daenerys", "Targaryen", 28, "alive", 12);
const myCounselor = new Counselor(
  "Tyrion Lannister",
  "Lannister",
  45,
  "alive",
  "Daenerys"
);
const mySquire = new Squire(
  "Bronn",
  "Stokeworth",
  32,
  "alive",
  "Tyrion Lannister",
  3
);
const myFighter = new Fighter(
  "Jaime Lannister",
  "Lannister",
  34,
  "alive",
  "sword",
  8
);

const character = new Character(myKing, myCounselor, mySquire, myFighter);
debugger;
//new Character = [myKing, myCounselor, mySquire, myFighter];
console.log(character());
