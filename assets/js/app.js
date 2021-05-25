
  // 下のものはスワイパーで使います
  const swiper = new Swiper('.swiper-container.top', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  });

  // MainのSWIPERです。
  const beachswiper = new Swiper('.swiper-container.beach', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $('#top-btn').on('click', function(){
    $('body, html').animate({scrollTop:0},500);
});

// hamburger menu表示/非表示用
$('.btn').on('click', function(){
  $('.menu-box').slideIn();
});
$('.btn').on('click', function(){
  $('.menu-box').slideOut();
});


// 追加したけど先生に聞くところA

$(window).on('scroll', function(){
    let q11 = $('#programming.programming').offset().top;
    //画面の高さの設定↓
    let wh = $(window).height();
    if(q11 <= $(window).scrollTop() + wh){
        $('.toptitle','.description').removeClass('hide');
    } else {
        $('toptitle','.description').addClass('hide');
    }



})

  