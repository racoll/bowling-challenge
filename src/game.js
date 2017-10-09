"use strict";

function Game() {
  this.START_SCORE = 0; // these are properties of Game
  this.GUTTER_GAME_SCORE = 0;
  this.MAX_GAME_SCORE = 300;
  this.STRIKE_SCORE = 10;
  this.ROLL_ONLY_1 = 20;
  this.rolls = [];
  // set max capacity of rolls?
}

Game.prototype.startPoints = function() {
  return this.START_SCORE;
};

Game.prototype.gutter = function() {
  return this.GUTTER_GAME_SCORE;
  // return this.rolls;
};

Game.prototype.maxScore = function() {
  return this.MAX_GAME_SCORE;
  // return this.rolls;
};

Game.prototype.rollStrike = function() {
  this.rolls.push(10);
  return this.STRIKE_SCORE;
};

Game.prototype.roll = function(pins) {
  this.rolls.push(pins);
  return pins;
};

Game.prototype.scoreOnes = function() {
  return this.ROLL_ONLY_1;

};

Game.prototype.currentScores = function() {
  return this.rolls;
};


Game.prototype.scoreTotal = function() {
  // return 250;
  var count = 0;
     for (var i = this.rolls.length; i >= 0; i--) { 
       count += this.rolls[i];
     }
     return count;
};
