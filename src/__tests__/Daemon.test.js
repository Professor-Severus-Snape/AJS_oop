import Daemon from '../js/characters/characterHeirs/Daemon';

test('testing of daemon creation without type parameter', () => {
  const result = new Daemon('демон1');
  expect(result).toEqual({
    name: 'демон1', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  });
});

test('testing of daemon creation with type parameter', () => {
  const result = new Daemon('демон2', 'Daemon');
  expect(result).toEqual({
    name: 'демон2', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  });
});
