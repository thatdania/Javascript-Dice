$(document).ready(function(){
  game = new Game();

  $('#one').html(`0`)
  $('#two').html(`0`)


  $('#roll').click(function(){
    game.rollAndSave()
    if (game.rolls.length === 1) {

      $('#one').html(`${game.rolls[0]}`)
    } else if(game.rolls.length === 2) {
      $('#two').html(`${game.rolls[1]}`)
      $('#sum').html(`You rolled ${game.totalCurrentScore()}!`)
      $('#previous').show(`${game.log()}`);
      $('#previous').html(`${game.log()}`);
    }

      console.log(game.rolls)
  });



  $('#resets').click(function(){
    $('#one').html('0');
    $('#two').html(`0`);
    $('#sum').html(`0`);
    $('#previous').hide(`${game.log()}`);
    game.resets();
  });
});
