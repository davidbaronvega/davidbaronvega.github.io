//JS files for design formatting/functionallity

//Toggling menu for mobile devices only
function toggleMenu() {
    var nav = document.getElementById("main-nav");
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}