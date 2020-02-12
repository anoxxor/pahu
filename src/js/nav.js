$(window).on('load resize', function() {

  setTimeout(() => {
    $("[data-scroll-target]").each(function() {
      let curItem = $(this);
      let targetOffset = $(curItem.data("scroll-target")).offset().top;
      curItem.click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $("html, body").stop().animate({scrollTop: targetOffset}, 1000);
        $(".menu").addClass("hidden");
        $("body").removeClass("locked");
      })
    })
  }, 200);

});