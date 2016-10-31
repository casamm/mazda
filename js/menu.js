$(".phone .menu").click(function() {
  $(".phone .bar").toggleClass("animation");
  $(".phone .menu-overlay").toggleClass("show");
  // $(".desktop .title").toggleClass("invisible");
  $(".phone header").toggleClass("background");
});