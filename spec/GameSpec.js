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

});
