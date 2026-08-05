// ==========================
// PISERGISI EMPIRE
// Official Portal
// ==========================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 80){
        header.style.background = "rgba(7,18,34,.92)";
    }else{
        header.style.background = "rgba(7,18,34,.65)";
    }

});