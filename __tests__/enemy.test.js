const Enemy = require('../lib/Enemy.js');
const Potion = require('../lib/potion.js');

jest.mock('../lib/Potion.js');

test('creates an enemy object', () => {
  const enemy = new Enemy('alien', 'blaster');

  expect(enemy.name).toBe('alien');
  expect(enemy.weapon).toBe('blaster');
  expect(enemy.health).toEqual(expect.any(Number));
  expect(enemy.strength).toEqual(expect.any(Number));
  expect(enemy.agility).toEqual(expect.any(Number));
  expect(enemy.potion).toEqual(expect.any(Object));
});

test("gets enemy's health value", () => {
  const enemy = new Enemy('alien', 'blaster');

  expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));
});

test('gets a description of the enemy', () => {
  const enemy = new Enemy('alien', 'blaster');

  expect(enemy.getDescription()).toEqual(expect.stringContaining('alien'));
  expect(enemy.getDescription()).toEqual(expect.stringContaining('blaster'));
});

test('checks if enemy is alive or not', () => {
  const enemy = new Enemy('alien', 'blaster');

  expect(enemy.isAlive()).toBeTruthy();

  enemy.health = 0;

  expect(enemy.isAlive()).toBeFalsy();
});

test("gets enemy's attack value", () => {
  const enemy = new Enemy('alien', 'blaster');
  enemy.strength = 10;

  expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
  expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);
});

test("subtracts from enemy's health", () => {
  const enemy = new Enemy('alien', 'blaster');
  const oldHealth = enemy.health;

  enemy.reduceHealth(5);

  expect(enemy.health).toBe(oldHealth - 5);

  enemy.reduceHealth(99999);

  expect(enemy.health).toBe(0);
});

test('gets a description of the enemy', ()=>{
    const enemy = new Enemy('alien', 'blaster');

    expect(enemy.getDescription()).toEqual(expect.stringContaining('alien'));
    expect(enemy.getDescription()).toEqual(expect.stringContaining('blaster'));
});