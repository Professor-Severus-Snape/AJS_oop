import Character from '../Character';

test('testing of character creation without parameters', () => {
  expect(() => {
    const character = new Character();
  }).toThrowError('Ошибка в параметре name');
});

test('testing of character creation with invalid name parameter (not a string)', () => {
  expect(() => {
    const character = new Character(123);
  }).toThrowError('Ошибка в параметре name');
});

test('testing of character creation with invalid name parameter (length < 2)', () => {
  expect(() => {
    const character = new Character('л');
  }).toThrowError('Ошибка в параметре name');
});

test('testing of character creation with invalid name parameter (length > 10)', () => {
  expect(() => {
    const character = new Character('лучник_лучник');
  }).toThrowError('Ошибка в параметре name');
});

test('testing of character creation with invalid type parameter', () => {
  expect(() => {
    const character = new Character('не лучник', 'Not a Bowman');
  }).toThrowError('Ошибка в параметре type');
});

test('testing levelUp method (health > 0)', () => {
  const character = new Character('лучник', 'Bowman');
  character.health = 25;
  character.attack = 25;
  character.defence = 25;
  character.levelUp();
  expect(character).toEqual({
    name: 'лучник',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  });
});

test('testing levelUp method (health = 0)', () => {
  const character = new Character('лучник', 'Bowman');
  character.health = 0;
  expect(() => character.levelUp()).toThrow('Нельзя воскресить мертвеца');
});

test('testing damage method (final health > 0)', () => {
  const character = new Character('лучник', 'Bowman');
  character.attack = 25;
  character.defence = 25;
  character.damage(33);
  expect(character).toEqual({
    name: 'лучник',
    type: 'Bowman',
    health: 75,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('testing damage method (final health < 0)', () => {
  const character = new Character('лучник', 'Bowman');
  character.attack = 25;
  character.defence = 25;
  character.damage(1000);
  expect(character).toEqual({
    name: 'лучник',
    type: 'Bowman',
    health: 0,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
