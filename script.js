/*********************************************************/
/************************ SIDEBAR ***********************/
/*******************************************************/
var btn = document.querySelector('.toggle');
var btnst = true;
btn.onclick = function () {
    if (btnst == true) {
        document.querySelector('.toggle span').classList.add('toggle');
        document.getElementById('mySidebar').classList.add('sidebarshow');
        document.getElementById("layout").style.marginLeft = "340px";
        document.getElementById("layout").style.transition = "0.6s";
        btnst = false;
    } else if (btnst == false) {
        document.querySelector('.toggle span').classList.remove('toggle');
        document.getElementById("layout").style.marginLeft = "0";
        document.getElementById('mySidebar').classList.remove('sidebarshow');
        document.getElementById("layout").style.transition = "0.6s";
        btnst = true;
    }
}
