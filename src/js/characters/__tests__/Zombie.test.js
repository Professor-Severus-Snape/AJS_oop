import Zombie from '../Zombie';

test('testing of zombie creation without type parameter', () => {
  const result = new Zombie('зомби1');
  expect(result).toEqual({
    name: 'зомби1', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  });
});

test('testing of zombie creation with type parameter', () => {
  const result = new Zombie('зомби2', 'Zombie');
  expect(result).toEqual({
    name: 'зомби2', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  });
});
