//toggle show-menu
const menuOpenBtn = document.querySelector('.menuToggle');
const linkBtn = document.querySelectorAll('.menu-bar a');
const menu = document.querySelector('.menu-bar');

menuOpenBtn.addEventListener("click",menuToggle);

function menuToggle(){
    menu.classList.toggle("show-menu");
}

//toggle topbar hidden
const topbar = document.querySelector('.topbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll',windowScroll);

function windowScroll(){
    if(lastScrollY<window.scrollY){
        topbar.classList.add("topbar-hidden");
        console.log('向下');
    }else{
        topbar.classList.remove("topbar-hidden");
        console.log('向上');
    }
    //滾動畫面後，再重新給一次 Y
    lastScrollY = window.scrollY;
}