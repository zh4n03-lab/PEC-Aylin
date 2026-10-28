let indice = 0;

// Seleccionar todas las imágenes del carrusel
const imagenes = document.querySelectorAll(".slide");

// Función para mostrar imágenes
function mostrarImagen() {

    // Ocultar todas las imágenes
    imagenes.forEach(function(imagen) {
        imagen.style.display = "none";
    });

    // Mostrar la imagen actual
    imagenes[indice].style.display = "block";
}

// Función para cambiar imágenes
function cambiarImagen(numero) {

    indice += numero;

    // Si llega a la última, vuelve a la primera
    if (indice >= imagenes.length) {
        indice = 0;
    }

    // Si retrocede desde la primera, va a la última
    if (indice < 0) {
        indice = imagenes.length - 1;
    }

    mostrarImagen();
}

// Iniciar carrusel
if (imagenes.length > 0) {

    mostrarImagen();

    // Cambiar automáticamente cada 4 segundos
    setInterval(function() {
        cambiarImagen(1);
    }, 4000);

}