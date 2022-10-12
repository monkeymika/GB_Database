document.getElementById("hamburger").addEventListener("click", function () {
    document.getElementById("mySidebar").style.width = "300px";
    document.getElementById("mySidebar").style.transition = "0.6s";
    document.getElementById("layout").style.marginLeft = "300px";
    document.getElementById("layout").style.transition = "0.6s";

})

document.getElementById("closebtn").addEventListener("click", function () {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("mySidebar").style.transition = "0.6s";
    document.getElementById("layout").style.marginLeft = "0";
    document.getElementById("layout").style.transition = "0.6s";
})