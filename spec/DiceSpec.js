describe("Dice", function() {
  this.score1 = 0
  this.score2 = 0
  this.die1 = 0
  this.die2 = 0

  beforeEach(function() {
    dice = new Dice();
  });

  it("should be able to roll a 1 on one dice", function() {
    spyOn(Math, 'random').and.returnValue(0.1);
    dice.rollone();
    expect(dice.rollone()).toBe(1);
  });

  it("should be able to roll a 2 on one dice", function() {
    spyOn(Math, 'random').and.returnValue(0.3);
    dice.rollone();
    expect(dice.rollone()).toBe(2);
  });

  it("should be able to roll a 6 on ther other dice", function() {
    spyOn(Math, 'random').and.returnValue(0.9);
    dice.rollone();
    expect(dice.rollone()).toBe(6);
  });

  it("should be able to roll a 5 on ther other dice", function() {
    spyOn(Math, 'random').and.returnValue(0.7);
    dice.rolltwo();
    expect(dice.rolltwo()).toBe(5);
  });

  it("should prompt if the dice is less than 2", function() {
    spyOn(window, "confirm").and.returnValue("Bad Luck, Keep Trying");
    dice.total_roll();
    expect(window.confirm).toHaveBeenCalledWith("Bad Luck, Keep Trying")
  });

});
