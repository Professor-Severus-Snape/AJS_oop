import Undead from '../Undead';

test('testing of undead creation without type parameter', () => {
  const result = new Undead('нежить1');
  expect(result).toEqual({
    name: 'нежить1', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  });
});

test('testing of undead creation with type parameter', () => {
  const result = new Undead('нежить2', 'Undead');
  expect(result).toEqual({
    name: 'нежить2', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  });
});
