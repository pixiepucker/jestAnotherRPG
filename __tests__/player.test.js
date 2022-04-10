const { expect } = require('@jest/globals');
const Player = require('../lib/Player');
const Potion = require('../lib/__mocks__/Potion');

jest.mock('../lib/Potion');

test('creates a player object', ()=>{
    const player = new Player('Maya');

    expect(player.name).toBe('Maya');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
});