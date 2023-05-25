/* MOSTRAR/OCULTAR CONTRASEÑA */

const iconEye = document.querySelector(".icon-eye");
iconEye.addEventListener("click",function() {
    if(this.nextElementSibling.type === "password") {
        this.nextElementSibling.type = "text";
        iconEye.classList.remove("fa-eye-slash");
        iconEye.classList.add("fa-eye");
    } else {
        this.nextElementSibling.type = "password";
        iconEye.classList.remove("fa-eye");
        iconEye.classList.add("fa-eye-slash");
    }
});


/* VALIDACION PASSWORD */

const inputPassword = document.querySelector('input[type="password"]');
const indicador = document.querySelector(".indicador");
const textoIndicador = document.querySelector(".indicador .text");
const iconoIndicador = document.querySelector(".indicador .error");

inputPassword.addEventListener("input", verificarFortalezaContrasena);

function verificarFortalezaContrasena() {
  const contrasena = inputPassword.value;
  const fuerza = obtenerFortaleza(contrasena);

  indicador.classList.remove("débil", "mediana", "fuerte");
  indicador.classList.add(fuerza);

  textoIndicador.textContent = `La contraseña es ${fuerza}`;
  textoIndicador.style.color = obtenerColor(fuerza);
  iconoIndicador.style.color = obtenerColor(fuerza);

  if (contrasena() === "") {
    textoIndicador.style.display = "none";
    indicador.style.display = "none";
  } else {
    textoIndicador.style.display = "block";
    const fuerza = obtenerFortaleza(contrasena);
    textoIndicador.textContent = `La contraseña es ${fuerza}`;
    textoIndicador.style.color = obtenerColor(fuerza);
  }
}

function obtenerFortaleza(contrasena) {
  const tieneMinuscula = /[a-z]/.test(contrasena);
  const tieneMayuscula = /[A-Z]/.test(contrasena);
  const tieneNumero = /[0-9]/.test(contrasena);
  const tieneCaracterEspecial = /[^a-zA-Z0-9]/.test(contrasena);

  if (contrasena.length < 8) {
    return "débil";
  } else if (
    contrasena.length >= 8 &&
    tieneMinuscula &&
    tieneMayuscula &&
    tieneNumero &&
    tieneCaracterEspecial
  ) {
    return "fuerte";
  } else {
    return "mediana";
  }
}

function obtenerColor(fuerza) {
  if (fuerza === "débil") {
    return "red";
  } else if (fuerza === "mediana") {
    return "orange";
  } else if (fuerza === "fuerte") {
    return "green";
  }
}

/* VALIDACION CORREO ELECTRONICO */

const correoInput = document.getElementById("email");
const iconoCorrecto = document.querySelector(".correctos");
const iconoError = document.querySelector(".error-icon");
const textoLeyenda = document.getElementById("texto");

iconoCorrecto.style.display = "none";
iconoError.style.display = "none";

correoInput.addEventListener("input", validarCorreo);

function validarCorreo() {
  const correo = correoInput.value.trim();
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (correo === "") {
    iconoCorrecto.style.display = "none";
    iconoError.style.display = "none";
    textoLeyenda.style.display = "block";
  } else if (regexCorreo.test(correo)) {
    iconoCorrecto.style.display = "block";
    iconoError.style.display = "none";
    iconoCorrecto.style.color = "green"; 
    textoLeyenda.style.display = "none"; 
  } else {
    iconoCorrecto.style.display = "none";
    iconoError.style.display = "block";
    iconoError.style.color = "red";
    textoLeyenda.style.display = "block";
  }
}

