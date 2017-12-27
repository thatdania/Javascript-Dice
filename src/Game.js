function Game(dice = Dice){
 this.rounds = []
 this.rolls = []
 this.dice = new dice();
}

Game.prototype.rollAndSave= function() {
  this.rolls.push(this.dice.roll())
};
