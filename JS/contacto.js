/* Declaración de campo formulario */
const nombre = document.getElementById("nombre");
const usuario = document.getElementById("usuario");
const email = document.getElementById("email");
const contrasena = document.getElementById("contrasena");
const mensaje = document.getElementById("mensaje");

const boton = document.getElementById("input-enviar"); //Boton enviado

/* Función para enviar alerta de envio y vaciar campos del formulario */
boton.addEventListener("click", function(){
    alert("Formulario enviado con exito");
    nombre.value="";
    usuario.value="";
    email.value="";
    contrasena.value="";
    mensaje.value="";
});