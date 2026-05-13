"use strict";

const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const terminos = document.getElementById("terminos").checked;

    if (nombre.trim() === "") {
        mensaje.textContent = "El nombre no puede estar vacío";
        mensaje.style.color = "red";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        mensaje.textContent = "El email no tiene un formato correcto";
        mensaje.style.color = "red";
        return;
    }

    if (password.length < 6) {
        mensaje.textContent = "La contraseña debe tener al menos 6 caracteres";
        mensaje.style.color = "red";
        return;
    }

    if (!terminos) {
        mensaje.textContent = "Debes aceptar los términos";
        mensaje.style.color = "red";
        return;
    }

    const datos = new FormData(formulario);

    for (const dato of datos.entries()) {
        console.log(dato[0] + ": " + dato[1]);
    }

    mensaje.textContent = "Formulario enviado correctamente";
    mensaje.style.color = "green";
});

formulario.addEventListener("reset", function () {
    mensaje.textContent = "Formulario reiniciado";
    mensaje.style.color = "purple";
});