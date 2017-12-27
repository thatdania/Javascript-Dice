describe("Game", function(){

  beforeEach(function() {
    game = new Game();
  });

  describe("#rollAndSave", function(){
    it("game allows you to roll and save that value", function(){
      game.dice.roll = jasmine.createSpy('Return 1').and.returnValue(1)
      game.rollAndSave();
      expect(game.rolls[0]).toBe(1)
    });
  });

  describe("#log", function(){
    it("Round is added after two rolls", function(){
      game.dice.roll = jasmine.createSpy('Return 1').and.returnValue(1)
      game.rollAndSave();
      game.rollAndSave();
      game.log();
      expect(game.rounds[0]).toEqual([ 1, 1 ])
    });
  });

  describe("#totalCurrentScore", function(){
    it("shows the previous roll", function(){
      game.dice.roll = jasmine.createSpy('Return 1').and.returnValue(1)
      game.rollAndSave();
      game.rollAndSave();
      expect(game.totalCurrentScore()).toEqual(2)
    });
  });

  describe("#perfectScore", function(){
    it("shows 12/12 you are in great luck", function(){
      game.dice.roll = jasmine.createSpy('Return 6').and.returnValue(6)
      game.rollAndSave();
      game.rollAndSave();
      game.totalCurrentScore();
      expect(game.perfectScore()).toEqual("You rolled 12! You are in great luck!")
    });
  });

  describe("#loser", function(){
    it("shows loser message if less than two", function(){
      game.dice.roll = jasmine.createSpy('Return 6').and.returnValue(1)
      game.rollAndSave();
      game.rollAndSave();
      game.totalCurrentScore();
      expect(game.loserScore()).toEqual("You rolled 2! Bad Luck!")
    });
  });

  describe("#resets", function(){
    it("Resets the game", function(){
      game.dice.roll = jasmine.createSpy('Return 6').and.returnValue(1)
      game.rollAndSave();
      game.rollAndSave();
      game.reset();
      expect(game.rounds).toEqual([])
    });
  });

});
