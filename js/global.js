$(document)
    .ready(function() {
        ResponsiveWeb();


        $(window).resize(function() {
            ResponsiveWeb();
        });

        $('#drop_about').click(function() {
            $('.ui.pointing.dropdown').dropdown();
        });


        $('img')
            .visibility({
                type: 'image',
                transition: 'fade in',
                duration: 1000
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
    
    if (device_width < 1200){
        $('.menu_icon').css("display","none");
    }
    
    if (device_width < 768) {
        $('.title.header').toggleClass("icon");
        document.getElementById('master_logo').src = 'img/logo/rectangle_logo_for_phone.png';
        $('.icon_logo').css("display","none");
        $('#hidden_SL_button_for_mobile').toggleClass("hidden");
        $('#hidden_SL_button').toggleClass("hidden");
        $('.categoty_menu').toggleClass("hidden");
        $('.head_col').attr("style","display: none !important");
        $('.icon_logo_header').removeClass("thirteen wide column")
        $('.head.divider').toggleClass("none");
        $('.head.menu').toggleClass("margin_top");
        $("#sticky_nav").toggle(
            function() {
                $("#sticky_nav").css({
                    "display": "none"
                });
            });
    }

};


