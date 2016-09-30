$(".menu").click(function() {
  $(".bar").toggleClass("animation");
  $(".menu-overlay").toggleClass("show");
  $(".desktop .title").toggleClass("invisible");
  $("header").toggleClass("background");
});