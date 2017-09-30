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

  it("can be a gutter game", function() {
    expect(game.gutter()).toBe(0);
  });



});
