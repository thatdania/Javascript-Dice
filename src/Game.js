function Game(dice = Dice){
 this.rolls = []
 this.luckyrolls = 0
 this.sum = 0
 this.dice = new dice();
}

Game.prototype.rollAndSave= function() {
  if(this.rolls.length === 2){
    confirm( "You've already rolled!")}
  this.rolls.push(this.dice.roll())
};

Game.prototype.totalCurrentScore = function(){
  if(this.rolls.length != 2){
    confirm("Roll again mate!")}
  this.sum = this.rolls.reduce((o,t) => o + t);
  return this.sum
};

Game.prototype.luckyRolls = function(){
  if(this.sum >= 8){
    this.luckyrolls += 1
  }
  return this.luckyrolls
};


Game.prototype.resets = function(){
  game.rolls = []
  this.luckyroles = 0
};
