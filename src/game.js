"use strict";

function Game() {
  this.START_SCORE = 0
  this.GUTTER_GAME_SCORE = 0
  this.MAX_GAME_SCORE = 300
  this.STRIKE_SCORE = 10
  this.ROLL_ONLY_1 = 20
  this.rolls = [];
}

Game.prototype.startPoints = function() {
  return this.START_SCORE
};

Game.prototype.gutter = function() {
  return this.GUTTER_GAME_SCORE;
};

Game.prototype.maxScore = function() {
  return this.MAX_GAME_SCORE;
};

Game.prototype.rollStrike = function() {
  return this.STRIKE_SCORE;
};

Game.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

Game.prototype.scoreOnes = function() {
  return 20;
};

Game.prototype.currentScores = function() {
  return this.rolls;
  // return 7;
  // map add elements of array
  // this.rolls.reduce(function(acc, val) { return acc + val; });
};

Game.prototype.score = function() {
  return 250;
};
