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

  describe("#rounds", function(){
    it("game allows two rolls per round", function(){
      game.dice.roll = jasmine.createSpy('Return 1').and.returnValue(1)
      game.rollAndSave();
      expect(game.rolls[0]).toBe(1)
    });
  });

});
