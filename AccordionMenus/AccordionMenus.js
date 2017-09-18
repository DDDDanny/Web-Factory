/**
 * 手风琴菜单栏相关JS
 */
$(document).ready(function() {
  $("div>ul>li").on('click', function() {
    if ($(this).next('ul').is(':hidden')) {
      //
      $("ul li").children('span:last-child').rotate({
        animateTo:0
      });
      //
      $(this).children('span:last-child').rotate({
        animateTo:180
      });
      //
      $("ul li").css('color', 'black');
      $(this).css('color', '#1cddb1');
    }else{
      $(this).children('span:last-child').rotate({
        animateTo:0
      });
      $(this).css('color', 'black');
    }

    if ($("#last").next('ul').is(':hidden')) {
      $(this).css('border-radius', '0px');
      $("div>ul>li:first-child").css('border-radius', '5px 5px 0px 0px');
    }
    else {
      $("#last").css('border-radius', '0px 0px 5px 5px');
    }
    //
    $(".two").slideUp(400);
    //
    $(this).next('ul').stop();
    //
    $(this).next('ul').slideToggle(400);
  });
});
