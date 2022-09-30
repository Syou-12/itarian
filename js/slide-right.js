$(function() {
    let window_h = $(window).height();
    let scroll_top = $(window).scrollTop();
    
    $(".right").each(function() {
      let elem_pos = $(this).offset().top;
      
      if (scroll_top >= elem_pos - window_h) {
        $(this).addClass("FadeIN-r");
      } else {
        $(this).removeClass("FadeIN-r");
      }
      
    });
    
  });
  
  $(window).on("scroll", function() {
    let window_h = $(window).height();
    let scroll_top = $(window).scrollTop();
    
    $(".right").each(function() {
      let elem_pos = $(this).offset().top;
      
      if (scroll_top >= elem_pos - window_h) {
        $(this).addClass("FadeIN-r");
      } else {
        $(this).removeClass("FadeIN-r");
      }
      
    });
  });