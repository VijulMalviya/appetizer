AOS.init();

$(window).on('load',function(){
  $(".loader").fadeOut("2000");

})

$(document).ready(function(){
    $("#bars").click(function(){
      

      if ($('.Navigation i').hasClass("fa-bars")) {
        $(".Navigation i").removeClass("fa-bars");
        $(".Navigation i").addClass("fa-times");
        $(".nav-links").slideDown("slow");
    
      }
      // Else, the element doesn't have the active class, so we remove it from every element before applying it to the element that was clicked
      else {
        $(".Navigation i").addClass("fa-bars");
        $(".Navigation i").removeClass("fa-times");
        $(".nav-links").slideUp("slow");
      }
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



