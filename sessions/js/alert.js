
$("li.active").click(function() {
	location.href = "../sessions/chat.html";
});
$("li.next").click(function() {
  $(".alert").toggleClass("show");
});
$(".alert header").click(function() {
  $(".alert").toggleClass("show");
});
$(".no").click(function() {
  $(".alert").toggleClass("show");
});