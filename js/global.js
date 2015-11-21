
function detectIEBrowser() {

        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer, return version number
            alert("很抱歉，我們暫時不支援 IE ( Internet Explorer ) 瀏覽器，為了讓您無礙的翻閱我們的故事，請改用 Chrome 或 Firefox，謝謝。");

   return false;
}

function ResponsiveWeb() {
    console.log("Execute RW");

    var device_width = $(document).width();
    var device_height = $(document).height();
    var footer_pos = $('#footer').position();


    if (device_width < 2000) {

        $('.laptop').removeClass("hidden");
        $('.mobile').addClass("hidden");
    }

    if (device_width < 1200) {
        $('.menu_icon').css("display", "none");
        $('.ui.stackable.centered.page.grid').toggleClass("page");
    }

    if (device_width < 768) {
        $('.laptop').addClass("hidden");
        $('.mobile').removeClass("hidden");
        $('.move_top').addClass("hidden");
        $('#master_menu').addClass("vertical");
        $('#master_menu').css("text-align", "left");
        $('.menu_icon').css("display", "block");
        //document.getElementById('master_logo').src = '/img/logo/rectangle_logo_for_phone.png';
        $('.icon_logo').css("display", "none");
        $('.categoty_menu').toggleClass("hidden");
        $('.head_col').attr("style", "display: none !important");
        $('.icon_logo_header').removeClass("thirteen wide column")
        $('.head.divider').toggleClass("none");
        $('.head.menu').toggleClass("margin_top");
        $('img.ui.fluid.circular.image').addClass("padding");
        $("#sticky_nav").toggle(
            function() {
                $("#sticky_nav").css({
                    "display": "none"
                });
            });
    }

};
