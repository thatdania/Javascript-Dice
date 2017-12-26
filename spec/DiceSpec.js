describe("Dice", function() {
  this.log = []
  this.total = 0
  this.score1 = 0
  this.score2 = 0

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
   spyOn(Math, 'random').and.returnValue(0.1);
   dice.rollone();
   dice.rolltwo();
   dice.total_score();
   expect(dice.outcome()).toBe("You rolled 2 Shit luck, keep going")
 });

 it("should prompt you have fab luck if your total is more than 10", function(){
   spyOn(Math, 'random').and.returnValue(0.8);
   dice.rollone();
   dice.rolltwo();
   dice.total_score();
   expect(dice.outcome()).toBe("You rolled 10 Fab luck! You're ready to gamble")
 });

 it("should prompt you have 12/12 if your total is a 12", function(){
   spyOn(Math, 'random').and.returnValue(0.9);
   dice.rollone();
   dice.rolltwo();
   dice.total_score();
   expect(dice.outcome()).toBe("You rolled 12 12/12!")
 });

});
