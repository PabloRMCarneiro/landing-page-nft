const icon = document.querySelector(".material-icons");
const button = document.querySelector(".icon-btn");
let state  = 1;


function menuIcon(){
    if(state === 1){
        document.querySelector(".menu-links-hiden").style.display = "none";
        icon.innerHTML = "arrow_drop_down";
        state = 0;
        return;
    }
    document.querySelector(".menu-links-hiden").style.display = "flex";
    icon.innerHTML = "close";
    state = 1;
}

window.addEventListener("resize", function(){
    if( document.body.clientWidth > 972){
        state = 1;
        menuIcon();
        return;
    }
    menuIcon();
});

button.addEventListener("click", () => menuIcon());
