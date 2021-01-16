$(document).ready(function () {
  //animated rendering
  if ($(".main-container").hasClass("fadeOut")) {
    $(".main-container").removeClass("fadeOut").addClass("fadeIn");
  }
  if ($(".wrapper").hasClass("fadeOut")) {
    $(".wrapper").removeClass("fadeOut").addClass("fadeIn");
  }

  // navagation set
  var now = $(location).attr("pathname");
  $(".sub")
    .children("li")
    .children("a")
    .each(function (index, item) {
      if (now.indexOf($(this).attr("href")) >= 0) {
        $(this).parent().parent().show();
        $(this).css("text-shadow", "1px 1px 5px $color2");
        return false;
      }
    });

  // navagation sub menu toggle
  $("input[type=checkbox").change(function () {
    if ($(this).is(":checked")) {
      $(this).next().text("▲");
      $(this).parent().next().show();
    } else {
      $(this).next().text("▼");
      $(".sub").hide();
    }
  });
  // naviagation toggle
  $(".nav_toggle").click(function () {
    if ($("nav").css("display") == "none") {
      $("nav").show();
      $(".main-container").css("width", "calc(100% - 250px)");
      $(".nav_toggle").css("left", "245px");
    } else {
      $("nav").hide();
      $(".main-container").css("width", "100%");
      $(".nav_toggle").css("left", "5px");
    }
  });

  // scroll event
  $(".main-content").scroll(function () {
    $(".goup").show();
    if ($(".main-content").scrollTop() === 0) {
      $(".goup").hide();
    }
  });
  $(".goup").click(function () {
    $(".main-content").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });

  // post mouse event
  $(".post").mouseenter(function () {
    $(this).addClass("animated").addClass("pulse");
  });
  $(".post").mouseleave(function () {
    $(this).removeClass("pulse");
  });

  //go to list
  $(".go-back").click(function(){
    window.history.back();
  });
});
