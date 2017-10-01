"use strict";

function Game() {
  this.START_SCORE = 0;
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
  // return 7;
  // map add elements of array
  // this.rolls.reduce(function(acc, val) { return acc + val; });
};


Game.prototype.scoreTotal = function() {
  // return 250;
  var count = 0;
     for (var i = this.rolls.length; i--;) { // understand this!
       count += this.rolls[i];
     }
     return count;
};

// Game.prototype.scoreTotal = function() {
//   var count = 0;
//   var rollIndex = 0;
//
//   for (var frameIndex = 0; frameIndex < 10; frameIndex++); {
//     if (this.rolls[rollIndex] + this.rolls[rollIndex + 1] == 10) {
//       count += this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
//     } else {
//         count += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
//     }
//     rollIndex += 2;
// }
//
//   return count;
// };