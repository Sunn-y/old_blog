$(document).ready(function() {

    //animated rendering
    if ($(".container").hasClass('fadeOut')) {
        $(".container").removeClass("fadeOut").addClass("fadeIn");
    }
    if ($(".wrapper").hasClass('fadeOut')) {
        $(".wrapper").removeClass("fadeOut").addClass("fadeIn");
    }
    
    // navagation set
    var now = $(location).attr('pathname');
    $('.sub').children('li').children('a').each(function(index, item){
       if(now.indexOf($(this).attr('href')) >= 0){
            $(this).parent().parent().show();
            $(this).css('text-decoration','underline');
            return false;
       }
    });
     
    //responsive object
    $(window).resize(function(){
         if($(window).innerWidth() >= 1200){
             $("nav").show();
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
    // naviagation toggle
    $('.nav_toggle').click(function(){
        if($("nav").css("display") == "none"){
            $('nav').css('width','350px');
            $('.search').css('width','350px');
            $('.logo').css('width','350px');
            $('footer').css('width','350px');
            $('.wrapper').css('background','rgba(black,0.3)');
            $("nav").show();
        } else {
            $('nav').css('width','25%');
            $('.search').css('width','25%');
            $('.logo').css('width','25%');
            $('footer').css('width','25%');
            $("nav").hide();
        }
    });

    // scroll event
    $(window).scroll(function(){
        $(".goup").show();
        if($(document).scrollTop() === 0){
            $(".goup").hide();
        }
    });
    $('.goup').click(function() {
        $('html, body').animate({scrollTop: 0}, 500);
        return false;
    });

    // post mouse event
    $(".post").mouseenter(function(){
        $(this).addClass("animated").addClass("pulse");
    });
    $(".post").mouseleave(function(){
        $(this).removeClass("pulse");
    });
});
