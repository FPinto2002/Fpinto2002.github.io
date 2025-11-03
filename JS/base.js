/* Declaración y adquisición de el valor de la fecha actual para el elemento p con clase fecha del footer */
const fechahoy = document.querySelector(".fecha");
fechahoy.textContent = new Date().toLocaleDateString('es-CL');