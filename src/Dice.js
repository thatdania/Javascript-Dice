function Dice() {
  this.score1 = 0
  this.score2 = 0
  this.die1 = 0
  this.die2 = 0
}

Dice.prototype.rollone = function(){
  this.die1 =  Math.floor(Math.random() * 6) + 1;
  this.score1 = this.die1
  return this.score1
}

Dice.prototype.rolltwo = function(){
  this.die2 = Math.floor(Math.random() * 6) + 1;
  this.score2 = this.die2
  return this.score2
}

Dice.prototype.total_roll = function(){
  if(this.score1 + this.score2 < 2){
    confirm('Bad Luck, Keep Trying')
  }
}
