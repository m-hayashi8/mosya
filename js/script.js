
//リサイズ時に画面リロード（CSS反映の為）======================
$(window).on("resize", function() {
  var w = $(window).width();
  if (w > 1200) {  // ブレークポイント（単位：px）
    window.location = window.location;
  }
});


//メニュー表示================================================
$(document).ready(function(){ // 読み込まれたら
  var $window = $(this).width(); // ウィンドウ幅を取得して
  var bp = 1200;

  //PC版
  if($window > bp){ // 1200pxより大きかったら
    $('.header-nav').show(); // 表示
  }

  //タブレット・スマホ版
  $(function() {
    $('.ham-btn').on("click", function(){
  
      $(this).toggleClass('open');
      //クリック時の処理（メニュー展開）
      $('.header-nav').slideToggle(200);
    });
  
  });

  // ウィンドウ　リサイズ対応
  $(window).resize(function(){ // ウィンドウがリサイズされたら
    var $window = $(this).width();
    var bp = 1200;

    if($window > bp){
      $('.header-nav').show();
      $('.ham-btn').removeClass('open'); // ×印をハンバーガーに戻す
    }else{
      $('.header-nav').hide();
      $('.ham-btn').removeClass('open'); // ×印をハンバーガーに戻す
    }

  });
});


//ドロップダウン===========================================================================
$(function() {
  //main-menu直下のli要素をマウスオーバー
  $('.main-menu').children("li").hover(function(){
    //クリック時の処理（メニュー展開）
    $(this).children("ul").stop().slideToggle(200);
    /*$(this).children("a").toggleClass('open');*/
    /*$(this).children('.main-menu-item-link').toggleClass('js-main-menu-item-link-back');*/
  });
});

  