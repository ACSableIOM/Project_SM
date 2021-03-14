function openNav() {
    document.getElementById("mainNav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
}
  
function closeNav() {
    document.getElementById("mainNav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
}

// Inspiration from https://www.w3schools.com/howto/howto_css_modal_images.asp
var popout = document.getElementById("mainPopout")

// image retrieval
var mainImg = document.getElementById("attImgs");
var images = document.getElementsByClassName('attImg')
var popImg = document.getElementById("modImg");
for (var i = 0; i < images.length; i++) {
    var img = images[i];
    //click listener
    img.onclick = function(evt){
        popout.style.display = "block";
        popImg.src = this.src;
        console.info(evt);
    }
}


//close larger modal
var clos = document.getElementsByClassName("closeBtn")[0];

clos.onclick = function(){
    popout.style.display= "none";
}