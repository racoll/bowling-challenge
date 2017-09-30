"use strict";

function Game() {
  this.START_SCORE = 0
  this.GUTTER_GAME_SCORE = 0
}

Game.prototype.startPoints = function() {
  return this.START_SCORE
};

Game.prototype.gutter = function() {
  return this.GUTTER_GAME_SCORE;
};
