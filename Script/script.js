AOS.init();

$(document).ready(function(){
    $("#bars").click(function(){
      $(".nav-links").slideToggle("slow");
    });
  });


  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementsByClassName(".Navigation").style.backgroundColor = "white";
  } else {
    document.getElementsByClassName(".Navigation").style.backgroundColor = "transparent";

  }
}