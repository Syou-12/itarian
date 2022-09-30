$(function() {
    let window_h = $(window).height();
    let scroll_top = $(window).scrollTop();
    
    $(".text-b").each(function() {
      let elem_pos = $(this).offset().top;
      
      if (scroll_top >= elem_pos - window_h) {
        $(this).addClass("FadeIN");
      } else {
        $(this).removeClass("FadeIN");
      }
      
    });
    
  });
  
  $(window).on("scroll", function() {
    let window_h = $(window).height();
    let scroll_top = $(window).scrollTop();
    
    $(".text-b").each(function() {
      let elem_pos = $(this).offset().top;
      
      if (scroll_top >= elem_pos - window_h) {
        $(this).addClass("FadeIN");
      } else {
        $(this).removeClass("FadeIN");
      }
      
    });
  });