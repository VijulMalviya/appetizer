AOS.init();

$(window).on('load',function(){
  $(".loader").fadeOut("2000");

})

$(document).ready(function(){
    $("#bars").click(function(){
      $(".nav-links").slideToggle("slow");
    });
  });


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    $('.Navigation').css('background-color','white');
    $('.Navigation').addClass('shadow');
    $('.Navigation a').css('color','black');
  } else {
    $('.Navigation').css('background-color','transparent');
    $('.Navigation').removeClass('shadow');
    $('.Navigation a').css('color','white');
  }
}



