/**
 * 手风琴菜单栏相关JS
 */
$(document).ready(function() {
  $("div>ul>li").on('click', function() {
    if ($(this).next('ul').is(':hidden')) {
      //保证所有没有被点击的元素不旋转
      $("ul li").children('span:last-child').rotate({
        animateTo:0
      });
      //使得被点击的元素旋转
      $(this).children('span:last-child').rotate({
        animateTo:180
      });
      //保证其他选项卡颜色不变
      $("ul li").css('color', 'black');
      $(this).css('color', '#1cddb1');
    }else{
      $(this).children('span:last-child').rotate({
        animateTo:0
      });
      $(this).css('color', 'black');
    }

    //控制最后一个选项卡的圆角形态
    if ($("#last").next('ul').is(':hidden')) {
      $(this).css('border-radius', '0px');
      $("div>ul>li:first-child").css('border-radius', '5px 5px 0px 0px');
    }
    else {
      $("#last").css('border-radius', '0px 0px 5px 5px');
    }
    //保证打开的选项卡只有一个
    $(".two").not($(this).next('ul')).slideUp(300);
    $(this).next('ul').slideToggle(300);
  });
});
