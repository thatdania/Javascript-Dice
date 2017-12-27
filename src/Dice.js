(function(exports){
  function Dice() {
  }

  Dice.prototype.roll = function(){
    return Math.floor(Math.random() * 6) + 1
  }

exports.Dice = Dice;
})(this);
