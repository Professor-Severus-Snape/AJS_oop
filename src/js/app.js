import Bowman from './Bowman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Daemon from './Daemon';
import Undead from './Undead';
import Zombie from './Zombie';

const bowman1 = new Bowman('лучник1'); // {name: "лучник1", type: "Bowman", health: 100, level: 1, attack: 25, defence: 25}
const bowman2 = new Bowman('лучник2', 'Bowman'); // {name: "лучник2", type: "Bowman", health: 100, level: 1, attack: 25, defence: 25}
// const bowman3 = new Bowman('лучник3', 'Not a Bowman'); // 'Ошибка в параметре type'
const daemon = new Daemon('демон'); // {name: "демон", type: "Daemon", health: 100, level: 1, attack: 10, defence: 40}
const magician = new Magician('маг'); // {name: "маг", type: "Magician", health: 100, level: 1, attack: 10, defence: 40}
const swordsman = new Swordsman('мечник'); // {name: "мечник", type: "Swordsman", health: 100, level: 1, attack: 40, defence: 10}
const undead = new Undead('нежить'); // {name: "нежить", type: "Undead", health: 100, level: 1, attack: 25, defence: 25}
const zombie = new Zombie('зомби'); // {name: "зомби", type: "Zombie", health: 100, level: 1, attack: 40, defence: 10}

console.log('bowman1: ', bowman1);
console.log('bowman2: ', bowman2);
// console.log('bowman3: ', bowman3);
console.log('daemon: ', daemon);
console.log('magician: ', magician);
console.log('swordsman: ', swordsman);
console.log('undead: ', undead);
console.log('zombie: ', zombie);
