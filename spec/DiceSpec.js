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

  it("should be able to calculate the total score", function(){
    spyOn(Math, 'random').and.returnValue(0.9);
    dice.rollone();
    dice.rolltwo();
    dice.total_score();
    expect(dice.total_score()).toBe(12)
  });

 it("should prompt you have shit luck if your total is less than two", function(){
   spyOn(Math, 'random').and.returnValue(0.3);
   dice.rollone();
   dice.rolltwo();
   expect(dice.outcome()).toBe("Shit luck, keep going")
 });



});
