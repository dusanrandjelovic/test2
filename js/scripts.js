
function openNav() {
  document.getElementById("mySidenav").style.width = "130px";
document.getElementById("mySidenavMob").style.width = "0";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "white";
}

function openNav2() {
  document.getElementById("mySidenavMob").style.width = "130px";
    document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav2() {
  document.getElementById("mySidenavMob").style.width = "0";
  document.body.style.backgroundColor = "white";
}

 jQuery( document ).ready(function() {
    jQuery('#mySidenav a').click(function(){
      jQuery('#mySidenav').css('width', '0');
        jQuery('body').css("background-color", "white");
    });
    jQuery('#mySidenavMob a').click(function(){
      jQuery('#mySidenavMob').css('width', '0');
        jQuery('body').css("background-color", "white");
    });
 });
