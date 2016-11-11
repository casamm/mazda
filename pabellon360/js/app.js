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

    if(event!=null)
    {
        $(".page-title").each(function(i, el) {
            if (el !== event.target) {
                $(el).addClass('hidden');
            }
        })
    }
    else
    {
        $(".page-title").each(function(i, el) {
                $(el).addClass('hidden');
        })
    }

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
        case 5:
            document.getElementById('iframe-content').src = "../sessions/chat.html";
            document.getElementById('iframe-content-phone').src = "../sessions/chat.html";
            break;
        case 6:
            document.getElementById('iframe-content').src = "../vehicles/cx-3.html";
            document.getElementById('iframe-content-phone').src = "../vehicles/cx-3.html";
            break;
        case 7:
            document.getElementById('iframe-content').src = "../sessions/chat2.html";
            document.getElementById('iframe-content-phone').src = "../sessions/chat2.html";
            break;
    }

    $("#iframe-content").removeClass("hidden");

    $(".phone .bar").toggleClass("animation");
    $(".phone .menu-overlay").toggleClass("show");
    $(".phone header").toggleClass("background");

    $(".desktop .menu").removeClass("invisible").animate({ opacity: 1 });

}






