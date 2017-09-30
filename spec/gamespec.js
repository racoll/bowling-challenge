describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });


  it("can create a new game", function() {

  });

  it("starts a game with no points", function() {
    expect(game.startPoints()).toBe(0);
  });


  it("can be a max score game", function() {
    for (var i = 0; i < 20; i++) {
      game.roll(10)
    }
    expect(game.maxScore()).toBe(300);
  });

  it("can roll a strike", function() {
    expect(game.rollStrike()).toBe(10);
    // plus bonus?!
  });

  it("can be a gutter game", function() {
    for (var i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.gutter()).toBe(0);
  });

  it("can be a game of all 1's", function() {
    for (var i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.scoreOnes()).toBe(20);
  });

  it("can display current scores", function() {
      game.roll(7);
    // expect(game.currentScores()).toBe(this.rolls);
    expect(game.currentScores()).toBe([7]);
  });

  it("Can display total score", function() {
    expect(game.score()).toBe(250);
  });

});
