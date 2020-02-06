// business logic----------


export class Character {
  constructor(name, str, int, attack, hp, level) {
    this.name = name;
    this.str = str;
    this.int = int;
    this.attack = attack;
    this.hp = hp;
    this.level = level;
  }
  wizard() {
    this.name = "wizard";
    this.str = 2;
    this.int = 4;
    this.attack = spell;
    this.hp = 20;
    this.level = 1;
  }
  fighter() {
    this.name = "fighter";
    this.str = 4;
    this.int = 2;
    this.attack = melee;
    this.hp = 40;
    this.level = 1;
  }
  goblin() {
    this.name = "goblin";
    this.str = 1;
    this.int = 1;
    this.attack = melee;
    this.hp = 11;
    this.level = 1;
  }
  attack() {
  let diceValue = Math.floor((Math.random() * 6) +1);
  if(diceValue.includes(1,3,5)){
    return "miss";
  }
  else return "miss";
  }
};
let spell = 10;
let melee = 5;


