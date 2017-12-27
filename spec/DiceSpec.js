describe("Dice", function() {
  this.rolls = []

  beforeEach(function() {
    dice = new Dice();
  });

  it("should be able to roll a 1 on one dice", function() {
    spyOn(Math, 'random').and.returnValue(0.1);
    expect(dice.roll()).toBe(1);
  });


});
