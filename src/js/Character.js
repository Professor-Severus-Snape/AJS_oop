export default class Character {
  constructor(name, type) {
    if (!name || typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Ошибка в параметре name');
    }

    const types = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];

    if (!types.some((item) => item === type)) {
      throw new Error('Ошибка в параметре type');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 10; // нужно ли ???
    this.defence = 10; // нужно ли ???
  }

  levelUp() {
    if (!this.health) {
      throw new Error('Нельзя воскресить мёртвеца');
    }
    this.level += 1;
    this.attack += this.attack * 0.2;
    this.defence += this.defence * 0.2;
    this.health = 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    this.health = this.health < 0 ? 0 : Math.floor(this.health);
  }
}
