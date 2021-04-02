$(function() {
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 5) {
            $(".menu").addClass("menuScroll");
            $(".logo-netflix img").addClass("imgScroll");
        } else {
            $(".menu").removeClass("menuScroll");
            $(".logo-netflix img").removeClass("imgScroll");
        }
    });
});

