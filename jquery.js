$(document).ready(function() {

  var dice = new Dice();


  $('#roll_first').on('click', function() {
    dice.rollone();
  });

  $('#roll_second').on('click', function() {
    dice.rolltwo();
  });

  $('#total').html(dice.total_score());

});
