import Magician from '../Magician';

test('testing of magician creation without type parameter', () => {
  const result = new Magician('маг1');
  expect(result).toEqual({
    name: 'маг1', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  });
});

test('testing of magician creation with type parameter', () => {
  const result = new Magician('маг2', 'Magician');
  expect(result).toEqual({
    name: 'маг2', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  });
});
