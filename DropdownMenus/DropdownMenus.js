/**
 * 下拉菜单相关JS
 */

$(document).ready(function() {
  // $(".dropli").mouseenter(function() {
  //   $(this).children('span:last-child').fadeIn(400);
  // });
  //
  // $(".dropli").mouseleave(function() {
  //   $(this).children('span:last-child').fadeOut(400);
  // });

  // 菜单栏收起函数
  function dropup(sss) {
    $(sss).children('span:last-child').animate({
      top: '-25px',
      opacity:'0.0',
    }, 400);
    //解决收起菜单栏后，点击空白处依然可以打开菜单栏的问题
    $(sss).children('span:last-child').hide(100);
  }
  //菜单栏打开函数
  function dropdown(ddd) {
    $(ddd).children('span:last-child').css('display', 'block');
    $(ddd).children('span:last-child').animate({
        top: '-15px',
        opacity:'1.0'
    }, 400);
  }

  $(".dropli").on('click', function() {
    var isv = $(this).children('span:last-child').css('opacity');
    if (isv == '1')
    {
      dropup(this);
    }
    else
    {
      dropup($(".dropli").not($(this)));//除点击的选项卡外的选项全部收起
      dropdown(this);
    }
  });

  //控制箭头颜色
  $(".dropli li:first-child").mouseenter(function() {
    $(this).parent('ul').next('span').css('color', '#00343f');
  });
  $(".dropli li:first-child").mouseleave(function() {
    $(this).parent('ul').next('span').css('color', '#68cc93');
  });
});
