function Game(dice = Dice){
 this.rolls = []
 this.rounds = []
 this.sum = 0
 this.dice = new dice();
}

Game.prototype.rollAndSave= function() {
  if(this.rolls.length === 2){
    confirm( "Roll again mate!")}
  this.rolls.push(this.dice.roll())
};

Game.prototype.totalCurrentScore = function(){
  if(this.rolls.length != 2){
    confirm("You've already rolled!")}
  this.sum = this.rolls.reduce((o,t) => o + t);
  this.rounds.push(this.sum)
  return this.sum
};

Game.prototype.log = function(){
  return this.rounds[0]

};

Game.prototype.resets = function(){
  game.rolls = []
  this.rounds = []
};
