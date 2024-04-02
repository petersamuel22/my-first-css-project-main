var hello = document.getElementById("hello")
function showmenu() {
    hello.style.right = "0vw";
    // this command edits the -100vw in the css file to 0px upon clicking the burger menu
}
function hidemenu() {
    hello.style.right = "-100vw  ";
}