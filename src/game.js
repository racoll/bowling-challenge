"use strict";

function Game() {
  this.START_SCORE = 0
  this.GUTTER_GAME_SCORE = 0
  this.MAX_GAME_SCORE = 300
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
