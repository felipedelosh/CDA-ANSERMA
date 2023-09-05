/**
 * FelipedelosH
 * 2023
 */

//INTERNAL LINKS
$( ".btn-to-click" ).on( "click", function() {
    //action
});

//EXTERNAL LINKS
$( ".btn_whatsapp" ).on( "click", function() {
    openNewTab("https://api.whatsapp.com/send/?phone=%2B573204535935&text=hola%2C+Deseo+agendar+una+cita.&type=phone_number&app_absent=0");
});

$( ".btn_isntagram" ).on( "click", function() {
    openNewTab("https://www.instagram.com/cda_anserma/");
});

$( ".btn_facebook" ).on( "click", function() {
    openNewTab("https://facebook.com/cdaanserma");
});

$( ".go-afe-portfolio" ).on( "click", function() {
    openNewTab("https://felipedelosh.github.io/AFE-PORTFOLIO");
});



/**
 * hover
 */
$( ".class_element" ).hover(function() {
    //If element hover
}).mouseleave(function() {  
    //If element not hover
});




/**
 * Enter a URL and open in new tab
 * @param {*} url 
 */

function openNewTab(url){
    var win = window.open(url, '_blank');
    win.focus();
}

function openLocalTab(url){
    var win = window.open(url, '_self');
    win.focus();
}

function openHTML(url){
    window.open(url, "_self");
}

/**
 * MediaQuery
 */
$(window).resize(function(){
    _responsiveRefresh();
});
$(window).scroll(function(){
    let _t = $(window).scrollTop();
    _NavbarController(_t, $(window).width(), $(window).height());
});

function _responsiveRefresh(){
    var _w = $(window).width();
    var _h = $(window).height();
    var _t = $(window).scrollTop();
    _NavbarController(_t, _w, _h);
    var iphoneMiniH = _w >= 360 && _w <= 399 && _h >= 800 && _h <= 850;
    var iphoneProH = _w >= 400 && _w <= 450 && _h >= 900 && _h <= 999;
    var iphone5SEH = _w >= 300 && _w <= 340 && _h >= 550 && _h <= 600;
    var iphone678PlUSH = _w >= 380 && _w <= 440 && _h >= 710 && _h <= 750;
    var iphoneXH = _w >= 365 && _w <= 398 && _h >= 800 && _h <= 899;
    var iphoneXRH = _w >= 400 && _w <= 420 && _h >= 880 && _h <= 910;
    var iphoneSEH = _w >= 350 && _w <= 385 && _h >= 650 && _h <= 700;
    var kindleH = _w >= 780 && _w <= 820 && _h >= 1260 && _h <= 1300;
    var androidBasicH = _w >= 580 && _w <= 620 && _h >= 940 && _h <= 980;  
    var androidPixelH = _w >= 400 && _w <= 420 && _h >= 800 && _h <= 840;    
    var notDisplayH = _w < 280 && _h <= 340;


    if(iphoneMiniH){   
        _responsiveConfigMobileH();
    }else if(iphoneProH){
        _responsiveConfigMobileH();
    }else if(iphone5SEH){
        _responsiveConfigMobileH();
    }else if(iphone678PlUSH){
        _responsiveConfigMobileH();
    }else if(iphoneXH){
        _responsiveConfigMobileH();
    }else if(iphoneXRH){
        _responsiveConfigMobileH();
    }else if(iphoneSEH){
        _responsiveConfigMobileH();
    }else if(kindleH){
        _responsiveConfigTablet();
    }else if(androidBasicH){;
        _responsiveConfigMobileH();
    }else if(androidPixelH){
        _responsiveConfigMobileH();
    }else if(notDisplayH){
        _responsiveConfigMobileH();
    }else{
        //alert("DEFAULT WINDOW SIZE:\n"+"H:"+_h+";"+"W;"+_w);
        if (_w < 700) {
            _responsiveConfigMobileH();
        }else if(_w >= 700 && _w <= 982){
            _responsiveConfigTablet();
        }else if(_w > 982){
            _responsiveConfigDesktop();
        }
    }
}

function _responsiveConfigMobileH(){
    //Banner Services
    $('.container_services_img_left').css("display", "none");
    $('.container_services_card_center').removeClass("col-6");
    $('.container_services_card_center').addClass("col-12");
    $('.container_services_img_right').css("display", "none");
    //Banner Services
    //Services
    $('.container_col_service_ico').removeClass("col");
    $('.container_col_service_ico').removeClass("col-6");
    $('.container_col_service_ico').addClass("col-12");
    //Services
    //KPI
    $('.col_kpi_container').removeClass("col");
    $('.col_kpi_container').removeClass("col-6");
    $('.col_kpi_container').addClass("col-12");
    $('.cointainer_kpi_text').css("top", "0%");
    $('.cointainer_kpi_text').css("transform", "translateX(12%)");
    $('.cointainer_kpi_text').css("margin-top", "40px");
    //KPI
    //Rates
    $('.container_col_rate_service').removeClass("col");
    $('.container_col_rate_service').removeClass("col-6");
    $('.container_col_rate_service').addClass("col-12");
    //Rates
    //we are
    $('.container_mision').removeClass("col");
    $('.container_mision').addClass("col-12");
    $('.container_vision').removeClass("col");
    $('.container_vision').addClass("col-12");
    //we are
    //Banner footer
    $('.container_col_banner_footer').removeClass("col-4");
    $('.container_col_banner_footer').addClass("col-12");
    //Banner footer
}

function _responsiveConfigTablet(){
    //Banner Services
    $('.container_services_img_left').css("display", "none");
    $('.container_services_card_center').removeClass("col-6");
    $('.container_services_card_center').addClass("col-12");
    $('.container_services_img_right').css("display", "none");
    //Banner Services
    //Services
    $('.container_col_service_ico').removeClass("col");
    $('.container_col_service_ico').removeClass("col-12");
    $('.container_col_service_ico').addClass("col-6");
    //Services
    //KPI
    $('.col_kpi_container').removeClass("col");
    $('.col_kpi_container').removeClass("col-12");
    $('.col_kpi_container').addClass("col-6");
    $('.cointainer_kpi_text').css("top", "0%");
    $('.cointainer_kpi_text').css("transform", "translateX(24%)");
    $('.cointainer_kpi_text').css("margin-top", "45px");
    //KPI
    //Rates
    $('.container_col_rate_service').removeClass("col");
    $('.container_col_rate_service').removeClass("col-12");
    $('.container_col_rate_service').addClass("col-6");
    //Rates
    //we are
    $('.container_mision').removeClass("col-12");
    $('.container_mision').addClass("col");
    $('.container_vision').removeClass("col-12");
    $('.container_vision').addClass("col");
    //we are
    //Banner footer
    $('.container_col_banner_footer').removeClass("col-12");
    $('.container_col_banner_footer').addClass("col-4");
    //Banner footer
}

function _responsiveConfigDesktop(){
    //Banner Services
    $('.container_services_img_left').css("display", "block");
    $('.container_services_card_center').removeClass("col-12");
    $('.container_services_card_center').addClass("col-6");
    $('.container_services_img_right').css("display", "block");
    //Banner Services
    //Services
    $('.container_col_service_ico').removeClass("col-12");
    $('.container_col_service_ico').removeClass("col-6");
    $('.container_col_service_ico').addClass("col");
    //Services
    //KPI
    $('.col_kpi_container').removeClass("col-6");
    $('.col_kpi_container').removeClass("col-12");
    $('.col_kpi_container').addClass("col");
    $('.cointainer_kpi_text').css("top", "30%");
    $('.cointainer_kpi_text').css("transform", "translateX(+40%)");
    $('.cointainer_kpi_text').css("margin-top", "55px");
    //KPI
    //Rates
    $('.container_col_rate_service').removeClass("col-6");
    $('.container_col_rate_service').removeClass("col-12");
    $('.container_col_rate_service').addClass("col");
    //Rates
    //we are
    $('.container_mision').removeClass("col-12");
    $('.container_mision').addClass("col");
    $('.container_vision').removeClass("col-12");
    $('.container_vision').addClass("col");
    //we are
    //Banner footer
    $('.container_col_banner_footer').removeClass("col-12");
    $('.container_col_banner_footer').addClass("col-4");
    //Banner footer
}

function _NavbarController(_t, _w, _h){
    //Color
    if(_t < 10){
        $('.navbar_desktop').css("background-color", "rgba(0, 0, 0, 0.0)");
        $('.navbar_mobile').css("background-color", "rgba(0, 0, 0, 0.0)");
    }else if(_t >= 10){
        $('.navbar_desktop').css("background-color", "#212934");
        $('.navbar_mobile').css("background-color", "#212934");
    }

    //Show - Hide
    let _isDisplayNavbarDesk = $('#navbarNavDropdown').css("display") !== "none";
    if(_isDisplayNavbarDesk){
        $('.container_logo_navbar_desktop').css("display", "block");
        $('.navbar_mobile').css("display", "none");
    }else{
        $('.container_logo_navbar_desktop').css("display", "none");
        $('.navbar_mobile').css("display", "block");
    }

}


_responsiveRefresh();
