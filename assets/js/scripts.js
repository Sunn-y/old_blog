function calc_width(){
    var window_width = $(window).innerWidth();
    var nav_width = $("nav").is(':visible')? parseInt($("nav").css("width").replaceAll("px","")) : 0;
    var main_padding = (window_width - nav_width) * 0.05;
    var main_width = (window_width - nav_width) - (main_padding * 2);
    
    $("main").css("left",nav_width).css("width", main_width).css("padding-left",main_padding).css("padding-right",main_padding);
}


$(document).ready(function() {

    if ($(".container").hasClass('fadeOut')) {
        $(".container").removeClass("fadeOut").addClass("fadeIn");
    }
    if ($(".wrapper").hasClass('fadeOut')) {
        $(".wrapper").removeClass("fadeOut").addClass("fadeIn");
    }
    $(".zoombtn").click(function() {
        $(".container").removeClass("fadeIn").addClass("fadeOut");
        $(".wrapper").removeClass("fadeIn").addClass("fadeOut");
    });

    //set
    if($(window).innerWidth() < 1200){
        $("nav").hide().addClass("is_hide"); 
    }
    $(".goup").hide();
    calc_width();

    // nav set
    $('.sub').hide();
    var now = $(location).attr('pathname');
    $('.sub').children('li').children('a').each(function(index, item){
       if(now==$(this).attr('href')){
            $(this).parent().parent().show();
            return false;
       }
    });

    // navagation sub menu toggle
    $('input[type=checkbox').change(function(){
        if($(this).is(':checked')){
            $(this).next().text('▲');
            $(this).parent().next().show();
        }
        else{
            $(this).next().text('▼');
            $('.sub').hide();
        }
    });
 
    //responsive object
    $(window).resize(function(){
       calc_width();     
        if($(window).innerWidth() < 1200){
            $("nav").hide(); 
        }
        if($(window).innerWidth() >= 1200){
            $("nav").show();
        }
    });
    $(window).scroll(function(){
        $(".goup").show();
        if($(document).scrollTop() === 0){
            $(".goup").hide();
        }
    });

    //event
    $(".nav_toggle").click(function(){
        if($("nav").hasClass('is_hide')) {
            $("nav").removeClass("is_hide").show().addClass("fadeIn");
        }
        else{
            $("nav").removeClass("fadeIn").hide().addClass("is_hide");
        }
        calc_width();
    });
    $('.goup').click(function() {
        $('html, body').animate({scrollTop: 0}, 500);
        return false;
    });
    $(".post").mouseenter(function(){
        $(this).addClass("animated").addClass("pulse");
    });
    $(".post").mouseleave(function(){
        $(this).removeClass("pulse");
    });
});
