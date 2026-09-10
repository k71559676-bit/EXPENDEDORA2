/* =====================================================
   ANIMACIÓN AL HACER SCROLL
===================================================== */

const elementos = document.querySelectorAll(
    ".necesidad-card, .idea-card, .etapa, .criterio, .detalles-grid article"
);


const observador = new IntersectionObserver(

    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.style.opacity = "1";

                entrada.target.style.transform =
                    "translateY(0)";

                observador.unobserve(
                    entrada.target
                );

            }

        });

    },

    {
        threshold: 0.15
    }

);


elementos.forEach((elemento) => {

    elemento.style.opacity = "0";

    elemento.style.transform =
        "translateY(20px)";

    elemento.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observador.observe(elemento);

});


/* =====================================================
   EFECTO EN EL MENÚ
===================================================== */

const enlaces =
    document.querySelectorAll(".navbar nav a");


enlaces.forEach((enlace) => {

    enlace.addEventListener("click", () => {

        enlaces.forEach((item) => {

            item.classList.remove("activo");

        });

        enlace.classList.add("activo");

    });

});
/* =====================================================
   VISOR DE IMÁGENES
===================================================== */

function abrirImagen(rutaImagen) {

    const visor = document.getElementById("visor-imagen");
    const imagenGrande = document.getElementById("imagen-grande");

    if (!visor || !imagenGrande) {
        return;
    }

    imagenGrande.src = rutaImagen;

    visor.classList.add("activo");

    document.body.style.overflow = "hidden";
}


function cerrarImagen() {

    const visor = document.getElementById("visor-imagen");

    if (!visor) {
        return;
    }

    visor.classList.remove("activo");

    document.body.style.overflow = "";

    document.getElementById("imagen-grande").src = "";
}


/* CERRAR AL HACER CLIC FUERA DE LA IMAGEN */

document.addEventListener("DOMContentLoaded", function () {

    const visor = document.getElementById("visor-imagen");

    if (!visor) {
        return;
    }

    visor.addEventListener("click", function (e) {

        if (e.target === visor) {
            cerrarImagen();
        }

    });

});


/* CERRAR CON ESC */

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {
        cerrarImagen();
    }

});