$(document).ready(function(){
  game = new Game();

  $('#one').html(`0`)
  $('#two').html(`0`)
  $('#lucky').html(`0`)


  $('#roll').click(function(){
    game.rollAndSave()
    if (game.rolls.length === 1) {
      $('#one').html(`${game.rolls[0]}`)
    } else if(game.rolls.length === 2) {
      $('#two').html(`${game.rolls[1]}`)
      $('#sum').show(`fast`);
      $('#sum').html(`You rolled a ${game.totalCurrentScore()}!`)
      $('#lucky').html(`${game.luckyRolls()}`)
    }


      console.log(game.luckyRolls())
  });

  $('#resets').click(function(){
    $('#one').html('0');
    $('#two').html(`0`);
    $('#sum').html(`0`);
    game.resets();
  });
});
