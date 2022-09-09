// Vars para browse
const navDer = document.getElementById("navDer");
const nav = document.querySelector(".nav");
const caret = document.getElementById("caret");
const dropdown = document.getElementById("dropdown");
dropdown.style.display = "none";

// Navbar sticky c/ background color
window.addEventListener("scroll",function(){

    nav.classList.toggle("active", window.scrollY > 0);
}) 

// Menu dropdown
navDer.addEventListener("mouseover", addStyles);

dropdown.addEventListener("mouseout", removeStyles);


/* pageLoad para detener la ejecución del código en el cargado 
y asegurarnos de que las rows se rendericen en el orden correcto*/ 
const pageLoad = async () => {
    await createBanner();
    await createOriginals();
    await createPopular();
    await createTrending();
    await createAction();
    await createComedy();
    await createHorror();
    await createRomance();
    await createDocumentaries();
}

window.addEventListener("load", pageLoad);






