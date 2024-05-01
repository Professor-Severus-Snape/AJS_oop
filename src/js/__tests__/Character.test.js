import Character from '../Character';

test('testing of character creation without parameters', () => {
  expect(() => { const character = new Character(); }).toThrowError('Ошибка в параметре name');
});

test('testing of character creation with invalid name parameter (not a string)', () => {
  expect(() => { const character = new Character(123); }).toThrowError('Ошибка в параметре name');
});

test('testing of character creation with invalid name parameter (length < 2)', () => {
  expect(() => { const character = new Character('л'); }).toThrowError('Ошибка в параметре name');
});

test('testing of character creation with invalid name parameter (length > 10)', () => {
  expect(() => { const character = new Character('лучник_лучник'); }).toThrowError('Ошибка в параметре name');
});

test('testing of character creation with invalid type parameter', () => {
  expect(() => { const character = new Character('не лучник', 'Not a Bowman'); }).toThrowError('Ошибка в параметре type');
});
