describe("Dice", function() {
  this.score = 0
  this.die1 = 0
  this.die2 = 0

  beforeEach(function() {
    dice = new Dice();
  });

  it("should be able to roll a 1", function() {
    spyOn(Math, 'random').and.returnValue(0.1);
    dice.roll();
    expect(dice.roll()).toBe(1);
 });

});
