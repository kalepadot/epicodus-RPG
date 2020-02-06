import { Character } from './../src/RPG';


// describe('character', () => {
//   test('should create character object', () => {
//     var character = new Character(name, charClass, str, int, level);
//     // expect(character).toEqual(name, charClass, str, int, level)
//   });
// });

describe('wizard', () => {
  test('should correctly create wizard character', () => {
    var character = new Character ()
    character.wizard();
    let spell = 10;
    expect(character.name).toEqual("wizard");
    expect(character.str).toEqual(2);
    expect(character.int).toEqual(4);
    expect(character.attack).toEqual(spell);
    expect(character.hp).toEqual(20);
    expect(character.level).toEqual(1);

  
  })
})

describe('fighter', () => {
  test("constructor creates fighter", () => {
    var character = new Character ()
    character.goblin();
    let melee = 5;
    expect(character.name).toEqual("goblin");
    expect(character.str).toEqual(1);
    expect(character.int).toEqual(1);
    expect(character.attack).toEqual(melee);
    expect(character.hp).toEqual(11);
    expect(character.level).toEqual(1);

  })
})

describe('goblin', () => {
  test("contructor creates goblin", () => {
    var character = new Character ()
    character.fighter();
    let melee = 5;
    expect(character.name).toEqual("fighter");
    expect(character.str).toEqual(4);
    expect(character.int).toEqual(2);
    expect(character.attack).toEqual(melee);
    expect(character.hp).toEqual(40);
    expect(character.level).toEqual(1);

  })
})

describe('attack', () => {
  test("attack method functions", () => {
    var character = new Character();
    expect(character.attack()).toEqual("miss");
  })
})