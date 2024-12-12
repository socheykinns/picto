var scroll = $(window).scrollTop()

$(window).scroll(function() {
  if ($(window).scrollTop() > scroll) {
    if (!$(".bgmenu").hasClass("bgmenu--opened")) {
        $("header").addClass("header--hidden");
    }
  } else {
    $("header").removeClass("header--hidden");
  }
  scroll = $(window).scrollTop()
})

$(".bgmenu").click(function() { 
    $(".bgmenu").toggleClass("bgmenu--opened");
    $("ul").toggleClass("ul--opened")
});

$(document).ready(function(){
  $("main").addClass('visible');
  $("footer").addClass('visible');
    $(document).on("click", "a:not([href*='#']):not([href^='tel']):not([href^='mailto'])", function(e) {
        e.preventDefault();
        $('.background-video--slider').get(0).play()
        $("main").removeClass('visible');
        $("footer").removeClass('visible');
        var self = this;
        setTimeout(function () {
            window.location.href = $(self).attr("href");
        }, 1500);
    });
});