function Dice() {
  this.total = 0
  this.score1 = 0
  this.score2 = 0
  this.die1 = 0
  this.die2 = 0
}

Dice.prototype.rollone = function(){
  this.die1 = Math.floor(Math.random() * 6) + 1;
  this.score1 = this.die1
  return this.score1
}

Dice.prototype.rolltwo = function(){
  this.die2 = Math.floor(Math.random() * 6) + 1;
  this.score2 = this.die2
  return this.score2
}

Dice.prototype.total_score = function(){
  this.total = this.score1 + this.score2
  return this.total
}

Dice.prototype.outcome = function(){
  if(this.total <= 2){
     return "Shit luck, keep going"
  }

  else if(this.total >= 10) {
    return "Fab luck! You're ready to gamble"
  }

  else {
    return this.total
  }
}
