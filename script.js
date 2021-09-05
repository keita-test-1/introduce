
$(function() {
    $('.gazo-1').click(function() {
        $('.Bigimg1').fadeIn();
    });

    $('.gazo-2').click(function() {
        $('.Bigimg2').fadeIn();
    });

    $('.bigparts').click(function() {
        $('.Bigimg1').fadeOut();
        $('.Bigimg2').fadeOut();
    });
});


$('.mine').click(function() {
    var $answer = $(this).find('.answer');
    if ($answer.hasClass('open')) {
      $answer.removeClass('open');
      $answer.slideUp();
      $(find).find('.click').text('+');
    } else {
      $answer.addClass('open');
      $answer.slideDown();
      $(this).find('.click').text('-');
    }
  });

