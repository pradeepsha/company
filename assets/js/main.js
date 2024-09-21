
$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('#header').addClass('header-scrolled');
    } else {
       $('#header').removeClass('header-scrolled');
    }
});

function openNav() {
   document.getElementById("mySidenav").style.width = "250px";
   document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
 }
 
 function closeNav() {
   document.getElementById("mySidenav").style.width = "0";
   document.body.style.backgroundColor = "white";
 }