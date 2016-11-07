function CloseOverlay() {
    $("#iframe-content").hide();
    $("#cartitle").addClass("invisible");
    
    document.getElementById('iframe-content').src = "";

    $("#iframe-content").addClass("hidden");
    $(".desktop .menu").addClass("invisible").animate({ opacity: 0 });

    $(".page-title").each(function(i, el) {
            $(el).removeClass('hidden');
        })

}

function ChangeContent(event, idcontent) {
    $("#iframe-content").show();
    $("#iframe-content-phone").show();

    $(".page-title").each(function(i, el) {
        if (el !== event.target) {
            $(el).addClass('hidden');
        }
    })

    switch (idcontent) {
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

    $("#iframe-content").removeClass("hidden");

    $(".phone .bar").toggleClass("animation");
    $(".phone .menu-overlay").toggleClass("show");
    $(".phone header").toggleClass("background");

    $(".desktop .menu").removeClass("invisible").animate({ opacity: 1 });


}
