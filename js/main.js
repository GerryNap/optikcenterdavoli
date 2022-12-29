$(document).ready(() => {
    let splitted = ((window.location.href).split('#'))[1];

    if([undefined, "", null].includes(splitted))
        $(".showcase-area").load("pages/home.html");
    else
        $(".showcase-area").load("pages/" + splitted + ".html");
});

const main = document.querySelector("main");
var big_wrapper = document.querySelector(".big-wrapper");

let dark = false;

function toggleAnimation(location = "home"){
    let splitted = ((window.location.href).split('#'))[1];
    if([undefined, "", null].includes(splitted) && location === "home")
        return;
    
    window.location.replace("#"+location);
    activeMenu();
    dark = !dark;
    let clone = big_wrapper.cloneNode(true);
    if(dark){
        clone.classList.remove("light");
        clone.classList.add("dark");
    } else {
        clone.classList.remove("dark");
        clone.classList.add("light");
    }
    clone.classList.add("copy");
    main.appendChild(clone);
    $(".showcase-area").eq(1).load("pages/" + location + ".html");

    document.body.classList.add("stop-scrolling");

    clone.addEventListener("animationend", () => {
        document.body.classList.remove("stop-scrolling");
        big_wrapper.remove();
        clone.classList.remove("copy");
        big_wrapper = document.querySelector(".big-wrapper");
    });
}

function activeMenu(){
    big_wrapper.classList.toggle("active");
}