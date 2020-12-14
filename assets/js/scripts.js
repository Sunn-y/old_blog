$(document).ready(function() {
    //animation
    if($(".container").hasClass('fadeOut')) {
        $(".container").removeClass("fadeOut").addClass("fadeIn");
    };
    if($(".wrapper").hasClass('fadeOut')) {
        $(".wrapper").removeClass("fadeOut").addClass("fadeIn");
    };
    //nav
    if($(window).innerWidth() < 1200){
        $("nav").addClass("fadeOut"); 
    }
    if(!$("nav").hasClass("fadeOut")){
        $("main").css("left",360).css("width",$(window).innerWidth()-360);
    }
    //responsive object
    $(window).resize(function(){
        if($(window).innerWidth() < 1200){
            $("nav").hide(); 
            $("main").css("width",$(window).innerWidth()).css("left",0);
        }
        if($(window).innerWidth() >= 1200){
            $("nav").show();
            $("main").css("width",$(window).innerWidth()-360).css("left",360);
        }
    });
    //event
    $(".nav_toggle").click(function(){
        if($("nav").hasClass('fadeOut')) {
            $("nav").removeClass("fadeOut").addClass("fadeIn");
            $("main").css("width",$(window).innerWidth()-360).css("left",360);
        }
        else{
            $("nav").removeClass("fadeIn").addClass("fadeOut");
            $("main").css("width",$(window).innerWidth()).css("left",0);
        }
    });
    $('.goup').click(function() {
        $('html, body').animate({scrollTop: 0}, 500);
        return false;
    });
});
