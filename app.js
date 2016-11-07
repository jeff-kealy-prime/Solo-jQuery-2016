$(document).ready(function(){
  $('.color-button').on('click', appendBlock);

  function appendBlock(){

    var dataColor = $(this).attr('data-color');
    var counter = $(this).val();
                  counter++ ;
                  $(this).val(counter);
    console.log(counter);

    $('.container').append('<div class="color-cube '+dataColor+'" ></div>')
    $('#'+dataColor+'').text('Total '+dataColor+ ':'+' '+counter +' ')
   }
});
