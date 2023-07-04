console.log("document loaded");

//Get the "Go To Top" button
let topButton = document.getElementById("topButton");

//When the user scrolls down 20px from top of document, show button
window.onscroll = function () {scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        topButton.style.display = "block";
        console.log("Scrolling: " + topButton.style.display);
    }else{
        topButton.style.display = "none";
        console.log("Scrolling: " + topButton.style.display);
    }
}

//When the user clicks on button, scroll to top of document
function topFunction(){
    console.log("User Clicked on Top Button");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}