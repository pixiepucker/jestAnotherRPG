const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');

function Game() {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;
};

Game.prototype.initializeGame = function(){
    this.currentEnemy = this.enemies[0];

    this.enemies.push(new Enemy('alien', 'blaster'));
    this.enemies.push(new Enemy('mutant', 'poison'));
    this.enemies.push(new Enemy('bug', 'pincers'));
};

inquirer
  .prompt({
    type: 'text',
    name: 'name',
    message: 'What is your name?'
  })
  // destructure name from the prompt object
  .then(({ name }) => {
    this.player = new Player(name);
    this.startNewBattle();
});

module.exports = Game;