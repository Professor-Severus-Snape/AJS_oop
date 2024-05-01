# Домашнее задание к лекции «Классы, наследование»

[![Build status](https://ci.appveyor.com/api/projects/status/k8q79agsmwct12t4?svg=true)](https://ci.appveyor.com/project/Professor-Severus-Snape/ajs-oop)

## Важно:
1. Код должен проходить ESLint без ошибок.
2. Unit-тесты должны обеспечивать 100% покрытие тестируемых функций и классов по строкам.

---

## Задача №1 - Классы, наследование

### Легенда

Вы решили перейти на классы и реализовать иерархию, выделив в качестве базового класса класс `Character`, а для остальных персонажей создать классы, наследующиеся от него.

### Описание

Реализуйте описанную иерархию классов: класс `Character` является родительским для всех остальных, 6 дочерних классов `Bowerman`, `Swordsman`, `Magician`, `Daemon`, `Undead`, `Zombie` от него наследуются, сами задавая свои характеристики.

Свойства, которые должны быть у объектов класса `Character`:
1. `name` - имя
2. `type` - тип
3. `health` - уровень жизни
4. `level` - уровень персонажа
5. `attack` - атака
6. `defence` - защита

Конструктор класса должен соответствовать следующим требованиям:
1. `name` - строка, min - 2 символа, max - 10
2. `type` - один из типов (строка): Bowman, Swordsman, Magician, Daemon, Undead, Zombie

В случае, если передаются некорректные значения, должна выбрасываться ошибка (`throw new Error(...)`).

В вашей функции автоматически должны устанавливаться значения следующих полей:
1. health: 100
2. level: 1
3. Атака/защита:
   1. Bowman: 25/25
   2. Swordsman: 40/10
   3. Magician: 10/40
   4. Undead: 25/25
   5. Zombie: 40/10
   6. Daemon: 10/40

---

## Задача №2 - Методы

### Легенда

Поскольку вы создавали классы для того, чтобы хранить в одном месте свойства объекта и его поведение, то пришла пора реализовать соответствующие методы.

#### Описание

Реализуйте в классе `Character` метод `levelUp`, который работает следующим образом:
1. На 1 повышает поле `level`;
1. На 20% повышает показатели `attack` и `defence`;
1. Приводит показатель `health` к значению 100.

Метод должен работать только если показатель жизни не равен 0. В противном случае генерируется ошибка (нельзя повысить левел умершего).

Реализуйте в класса `Character` метод `damage(points)`, который меняет внутреннее состояние объекта (`points` -  это урон, наносимый персонажу). Метод `damage(points)` ничего не возвращает и рассчитывает итоговое изменение жизни персонажа (`health`) по формуле: `health -= points * (1 - defence / 100)`, учитывая, что значение `health >= 0`.