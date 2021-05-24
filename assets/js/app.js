$(function () {
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



  
  $('#top-btn').on('click', function () {
    // しゅるしゅるーっとTOPに戻る
    $('body, html').animate({ scrollTop: 0 }, 500)　
  });

});
  