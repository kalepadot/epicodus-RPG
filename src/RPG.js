

// business logic----------

export let wizard = {
  power: 20,
  health: 50,
};

export let gorlock = {
  power: 13,
  health: 80,
}

export const wizAttack = function () {
  let wizardAttack = Math.floor((Math.random()* 20) + 0);
  gorlock.health -= wizardAttack;
  return gorlock.health;
}
export const gobAttack = function () {
  let gorlockAttack = Math.floor((Math.random()* 15) + 0);
  wizard.health -= gorlockAttack;
  return wizard.health;
}
// export class Character {
//   constructor(name, str, int, attack, hp, level) {
//     this.name = name;
//     this.str = str;
//     this.int = int;
//     this.attack = attack;
//     this.hp = hp;
//     this.level = level;
//   }
//   wizard() {
//     this.name = "wizard";
//     this.str = 2;
//     this.int = 4;
//     this.attack = spell;
//     this.hp = 20;
//     this.level = 1;
//   }
//   fighter() {
//     this.name = "fighter";
//     this.str = 4;
//     this.int = 2;
//     this.attack = melee;
//     this.hp = 40;
//     this.level = 1;
//   } 
//   goblin() {
//     this.name = "goblin";
//     this.str = 5;
//     this.int = 1;
//     this.attack = strike;
//     this.hp = 50;
//     this.level = 3;
//   }
//   attackVal() {
//     let diceValue = Math.floor((Math.random() * 6) +1);
//     if(diceValue.toString().includes(2,4,6)) {
//       return goblin(this.hp) -= 10;
//     }
    
//   }
//   attackVal2() {
//     let diceValue2 = Math.floor((Math.random() * 6) +1);
//     if(diceValue2.toString().includes(2,4,6)) {
//       return wizard(this.hp) -= 10;
//     }
    
//   }

// }
// let spell = 10;
// let melee = 5;
// let strike = 8;
// let character = new Character();
// let goblinKing = character.goblin();