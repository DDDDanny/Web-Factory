/**
 * 完成主要的动画效果实现
 * @author Danny
 * @Date 2017-9-23
 */

//搜索栏
$(document).ready(function() {
   $(".search-text").on('focus', function() {
     if ($(this).val() == '搜索...') {
       $(this).val('');
     }
   });
   $(".search-text").on('blur', function() {
     if ($(this).val() == '') {
       $(this).val('搜索...');
     }
   });
});
