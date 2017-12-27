function Game(dice = Dice){
 this.rounds = []
 this.rolls = []
 this.dice = new dice();
}

Game.prototype.rollAndSave= function() {
  this.rolls.push(this.dice.roll())
};

Game.prototype.log = function(){
  if(this.rolls.length === 2){
    this.rounds.push(this.rolls)
    this.rolls = []
  } else {
    game.rollAndSave()
  }
};

Game.prototype.showPreviousLog = function(){
  var sum = this.rolls.reduce((o,t) => o + t);
  return sum
}
