import Swordsman from '../Swordsman';

test('testing of swordsman creation without type parameter', () => {
  const result = new Swordsman('мечник1');
  expect(result).toEqual({
    name: 'мечник1', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  });
});

test('testing of swordsman creation with type parameter', () => {
  const result = new Swordsman('мечник2', 'Swordsman');
  expect(result).toEqual({
    name: 'мечник2', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  });
});
