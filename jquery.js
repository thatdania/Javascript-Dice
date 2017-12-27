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
      $('#sum').html(`You rolled a ${game.totalCurrentScore()}!`)
      game.luckyRolls()
      $('#lucky').html(`${game.luckyrolls}`)
      $('#two').html(`${game.rolls[1]}`)
    }


      console.log(game.luckyrolls)
  });

  $('#resets').click(function(){
    $('#one').html('0');
    $('#two').html(`0`);
    $('#sum').html(`0`);
    game.resets();
  });
});
