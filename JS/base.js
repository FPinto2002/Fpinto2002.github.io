/* Declaración y adquisición de el valor de la fecha actual para el elemento p con clase fecha del footer */
const fechahoy = document.querySelector(".fecha");
fechahoy.textContent = new Date().toLocaleDateString('es-CL');

/* Declaración y adquisición de el valor del año actual para el elemento p con clase year del footer */
const yearnow = document.querySelector(".year");
yearnow.textContent = new Date().getFullYear();