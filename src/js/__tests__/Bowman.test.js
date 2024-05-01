import Bowman from '../Bowman';

test('testing of bowman creation without type parameter', () => {
  const result = new Bowman('лучник1');
  expect(result).toEqual({
    name: 'лучник1', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  });
});

test('testing of bowman creation with type parameter', () => {
  const result = new Bowman('лучник2', 'Bowman');
  expect(result).toEqual({
    name: 'лучник2', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  });
});
