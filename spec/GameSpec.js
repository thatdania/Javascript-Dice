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

  describe("#totalCurrentScore", function(){
    it("shows the previous roll", function(){
      game.dice.roll = jasmine.createSpy('Return 1').and.returnValue(1)
      game.rollAndSave();
      game.rollAndSave();
      expect(game.totalCurrentScore()).toEqual(2)
    });
  });

  describe("#resets", function(){
    it("Resets the game", function(){
      game.dice.roll = jasmine.createSpy('Return 6').and.returnValue(1)
      game.rollAndSave();
      game.resets();
      expect(game.rolls).toEqual([])
    });
  });

  describe("#luckyRolls", function(){
    it("counts lucky roles", function(){
      game.dice.roll = jasmine.createSpy('Return 6').and.returnValue(6)
      game.rollAndSave();
      game.rollAndSave();
      game.totalCurrentScore();
      game.luckyRolls();
      expect(game.luckyrolls).toEqual(1)
    });
  });

});
