function Game(dice = Dice){
 this.rounds = []
 this.rolls = []
 this.sum = 0
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

Game.prototype.totalCurrentScore = function(){
  this.sum = this.rolls.reduce((o,t) => o + t);
  return this.sum
};

Game.prototype.perfectScore = function(){
  if(this.sum === 12){
    return `You rolled ${this.sum}! You are in great luck!`
  }
};

Game.prototype.loserScore = function(){
  if(this.sum <= 2){
    return `You rolled ${this.sum}! Bad Luck!`
  }
}
