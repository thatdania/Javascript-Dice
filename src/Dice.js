function Dice() {
  this.total = 0
  this.game = 0
  this.score1 = 0
  this.score2 = 0
}

Dice.prototype.rollone = function(){
  this.score1 = Math.floor(Math.random() * 6) + 1;
  return this.score1
}

Dice.prototype.rolltwo = function(){
  this.score2  = Math.floor(Math.random() * 6) + 1;
  return this.score2
}

Dice.prototype.total_score = function(){
  this.total = this.score1 + this.score2
  return this.total
}

Dice.prototype.outcome = function(){
  if(this.total <= 2){
     return `You rolled ${this.total} Shit luck, keep going`
  }
  else if(this.total === 12) {
    return `You rolled ${this.total} 12/12!`
  }

  else if(this.total >= 10) {
    return `You rolled ${this.total} Fab luck! You're ready to gamble`
  }
  else {
    return "you rolled" + this.total
  }
}
