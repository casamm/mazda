function CloseOverlay()
{
	$("#iframe-content").hide();  
	document.getElementById('iframe-content').src = "../vehicles/index.html";

    $("#divmenu").addClass("hidden");
    $("#iframe-content").addClass("hidden");
    $(".desktop header .wrap").removeClass("invisible");
}

function ChangeContent(idcontent)
{
$("#iframe-content").show();
$("#iframe-content-phone").show();

	switch(idcontent) 
	{
	case 0:
	    $("#iframe-content").hide();
        $("#iframe-content-phone").hide();
        break;
    case 1:
        document.getElementById('iframe-content').src = "../sessions/index.php";
        document.getElementById('iframe-content-phone').src = "../sessions/index.php";
        break;
    case 2:
        document.getElementById('iframe-content').src = "../vehicles/index.html";
        document.getElementById('iframe-content-phone').src = "../vehicles/index.html";
        break;
    case 3:
        document.getElementById('iframe-content').src = "../comparison/index.html";
        document.getElementById('iframe-content-phone').src = "../comparison/index.html";
        break;
    case 4:
        document.getElementById('iframe-content').src = "../guide/index.html";
        document.getElementById('iframe-content-phone').src = "../guide/index.html";
        break;
	}
        $("#divmenu").removeClass("hidden");
        $("#iframe-content").removeClass("hidden");
        $(".desktop header .wrap").addClass("invisible");

	   $(".bar").toggleClass("animation");
	   $(".menu-overlay").toggleClass("show");
	   $(".desktop .title").toggleClass("invisible");
	   $("header").toggleClass("background");

}
