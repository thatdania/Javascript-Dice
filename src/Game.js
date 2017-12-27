function Game(dice = Dice){
 this.rolls = []
 this.luckyrolls = 0
 this.sum = 0
 this.dice = new dice();
}

Game.prototype.rollAndSave= function() {
  this.rolls.push(this.dice.roll())
};

Game.prototype.totalCurrentScore = function(){
  this.sum = this.rolls.reduce((o,t) => o + t);
  return this.sum
};

Game.prototype.luckyRolls = function(){
  if(this.sum > 6){
    this.luckyrolls += 1
  }
};

Game.prototype.resets = function(){
  game.rolls = []
};
