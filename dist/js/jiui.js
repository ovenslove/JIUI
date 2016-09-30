$(function () {
    /*代理fastclick*/
    FastClick.attach(document.body);
   /*顶部tab事件*/
   _init();
   $(document.body).on('click','.ji-tab .ji-navbar .ji-navbar-item',function () {
       $(this).addClass('active').siblings().removeClass('active');
       $(this).parents('div.ji-tab').find('div.ji-tab-panel>div.ji-tab-panel-body').eq($(this).index()).fadeIn(200).siblings().fadeOut(200);
   });
});
/*初始化*/
function _init() {
    /*初始化tab的navbar宽度*/
    if($(".ji-tab").length !== 0){
        var a=100/parseInt($(".ji-tab").find('div.ji-navbar .ji-navbar-item').length);
        $(".ji-tab").find('div.ji-navbar .ji-navbar-item').css({'width':a+'%','display':'block'});
    }
}
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 12 * (clientWidth / 320) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
