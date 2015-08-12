$(document)
    .ready(function() {


        $(window).resize(function() {
            ResponsiveWeb();
        });

        $('#drop_about').click(function() {
            $('.ui.pointing.dropdown').dropdown();
        });



        /*
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
        */


    });


function ResponsiveWeb() {
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
        document.getElementById('master_logo').src = 'img/logo/rectangle_logo_for_phone.png';
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


