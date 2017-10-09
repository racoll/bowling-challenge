"use strict";

function Game() {

}

Game.prototype.roll1 = function() {
  if(this.rolls.length < 20); {
    this.rolls.push(1);  
  }
  throw "Impossible: Game Over";
};
