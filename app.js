$(document).ready(function(){
  $('.color-button').on('click', appendBlock);

  function appendBlock(){
    if($('.color-button').data("color", red)){
    $('.container').append('<div class="color-cube red" ></div>');
  } else if ($('.color-button').data("color", yellow)) {
    $('.container').append('<div class="color-cube yellow" ></div>');
  }
  //   $('.container').data("color", yellow).append('<div class="color-cube yellow" ></div>');
  //   $('.container').data("color", green).append('<div class="color-cube green" ></div>');
  //   $('.container').data("color", blue).append('<div class="color-cube blue" ></div>');
  //
   }
});
