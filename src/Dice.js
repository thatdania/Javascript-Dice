function Dice() {
  this.score = 0
  this.die1 = 0
  this.die2 = 0
}

Dice.prototype.roll = function(){
  this.die1 =  Math.floor(Math.random() * 6) + 1;
  console.log(this.die1)
  this.score = this.die1
  console.log(this.score)
  return this.score
}
