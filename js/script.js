//=====ウィンドウリサイズ（ブレークポイント超）時　画面リロード（CSS読込）=====
$(window).on("resize", function() {
  var w = $(window).width();

  if (w > 1200) {  // ブレークポイント（単位：px）
    window.location = window.location;
  }
});


//=====メインメニュー表示=====
$(document).ready(function(){ // 読み込まれたら
  var $window = $(this).width(); // ウィンドウ幅を取得して
  var bp = 1200;

  //PC版
  if($window > bp){ // 1200pxより大きかったら
    $('.header-nav').show(); // メニュー表示
  }

  //タブレット・スマホ版
  $(function() {
    $('.ham-btn').on("click", function(){ //ハンバーガーボタンをクリックすると
  
      $(this).toggleClass('open'); // ハンバーガーボタンを×に
      $('.header-nav').slideToggle(200); //メインメニュー表示・非表示
    });  
  });

  //=====ウィンドウ　リサイズ対応=====
  $(window).resize(function(){ // ウィンドウがリサイズされたら
    var $window = $(this).width();
    var bp = 1200;

    if($window > bp){  // 1200pxより大きかったら（PC版）
      $('.header-nav').show(); //メニュー表示
      $('.ham-btn').removeClass('open'); // ×印をハンバーガーに戻す

    }else{   // 上記以外（タブレット・スマホ版）
      $('.header-nav').hide(); //メニュー非表示
      $('.ham-btn').removeClass('open'); // ×印をハンバーガーに戻す
    }
  });

});


//====ドロップダウン=====
$(function() {
  //main-menu直下のli要素をマウスオーバー
  $('.main-menu').children("li").hover(function(){
    //style属性削除
    $('.main-menu*').removeAttr("height");
    //メニュー展開
    $(this).children("ul").stop().slideToggle(200);
    //style属性削除
    $('.main-menu*').removeAttr("height");  
  });
});

  