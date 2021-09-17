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
    // document.getElementsByClassName("logo").style.fontSize = "25px";
  } else {
    // document.getElementById("logo").style.fontSize = "35px";
    document.getElementsByClassName(".Navigation").style.backgroundColor = "transparent";

  }
}