function detectBrowser() {

    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';
    // Safari <= 9 "[object HTMLElementConstructor]" 
    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/ false || !!document.documentMode;
    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;
    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;
    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;

    if (!(isFirefox || isSafari || isChrome)) // If Internet Explorer, return version number
        alert("很抱歉，為了讓您無礙的翻閱我們的故事，請改用 Chrome、Firefox、Safari，謝謝。");

    return false;
}

function ResponsiveWeb() {
    console.log("Execute RW");

    var device_width = $(document).width();
    var device_height = $(document).height();
    var footer_pos = $('#footer').position();
    var pathname = window.location.pathname;
    var url      = window.location.href;
    console.log(pathname)
    console.log(url)


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

        // Here all for new_career_relationship page 
        if (pathname.includes("new_career_relationship.html")){
            $('#career_relationship').toggleClass('page');
            $('.each_school').toggleClass("ui basic segment");
        }
    }

};

function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null
}


function showStillWorking(selector) {
    $(selector).modal('show');
}


function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false;
    for (var i = arr1.length; i--;) {
        if (arr1[i] !== arr2[i])
            return false;
    }
    return true;
}
