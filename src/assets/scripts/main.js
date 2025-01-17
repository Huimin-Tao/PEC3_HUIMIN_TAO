/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * Write any other JavaScript below
 */

// Configuración de la dependencia AOS
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
      duration: 1000, // Duración de las animaciones en milisegundos
      easing: 'ease-in-out', // Tipo de easing
      once: true, // Si la animación debe ocurrir solo una vez
      mirror: false, // Animar los elementos mientras se hace scroll hacia atrás
  });
});


// Configuración del menú de hamburguesa
const hamburguesa = document.querySelector("button[aria-label='Abrir el menú de navegación']");
const navlinks = document.querySelector("header > ul");

if (hamburguesa && navlinks) {
  hamburguesa.addEventListener("click", () => {
    navlinks.classList.toggle("hidden");
    navlinks.classList.toggle("flex");
  });
} else {
  console.error("Elementos del menú de hamburguesa no encontrados en el DOM.");
}
