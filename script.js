document.addEventListener("DOMContentLoaded", () => {

    const hamburguer = document.querySelector("#hamburguer");
    const enlaces = document.querySelector("#nav-links");

    console.log(hamburguer);
    console.log(enlaces);

    hamburguer.addEventListener("click", () => {
                console.log("CLICK");

        enlaces.classList.toggle("show");
    });

});