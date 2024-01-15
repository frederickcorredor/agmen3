let menu = document.getElementById("menu");
let burguer= document.getElementById("menumovil");


burguer.addEventListener("click", mostrar)


function mostrar(){
    menu.style.display="flex"
    burguer.addEventListener("click",ocultar)
}

function ocultar(){
    menu.style.display="none"
    burguer.addEventListener("click",mostrar)
}
