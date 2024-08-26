// Función para validar el texto
function validarTexto(texto) {
    const regex = /^[a-z\s]*$/;  // Solo permite letras minúsculas y espacios
    return regex.test(texto);
}

// Función para encriptar el texto
function encriptar(texto) {
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado;
}

// Función para desencriptar el texto
function desencriptar(textoEncriptado) {
    let textoOriginal = textoEncriptado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoOriginal;
}

// Vinculamos las funciones a los botones
document.getElementById("botonEncriptar").onclick = function() {
    const texto = document.getElementById("textoEntrada").value;
    if (!validarTexto(texto)) {
        document.getElementById("textoSalida").textContent = "Error: Solo se permiten letras minúsculas y sin acentos.";
        document.getElementById("botonCopiar").style.display = "none"; // Ocultar botón de copiar
    } else if (texto.trim() === "") {
        document.getElementById("textoSalida").textContent = "Ningún mensaje fue encontrado. Ingresa el texto que desees encriptar o desencriptar.";
        document.getElementById("botonCopiar").style.display = "none"; // Ocultar botón de copiar
    } else {
        const textoEncriptado = encriptar(texto);
        document.getElementById("textoSalida").textContent = textoEncriptado;
        document.getElementById("botonCopiar").style.display = "block"; // Mostrar botón de copiar
    }
};

document.getElementById("botonDesencriptar").onclick = function() {
    const textoEncriptado = document.getElementById("textoEntrada").value;
    if (!validarTexto(textoEncriptado)) {
        document.getElementById("textoSalida").textContent = "Error: Solo se permiten letras minúsculas y sin acentos.";
        document.getElementById("botonCopiar").style.display = "none"; // Ocultar botón de copiar
    } else if (textoEncriptado.trim() === "") {
        document.getElementById("textoSalida").textContent = "Ningún mensaje fue encontrado. Ingresa el texto que desees encriptar o desencriptar.";
        document.getElementById("botonCopiar").style.display = "none"; // Ocultar botón de copiar
    } else {
        const textoDesencriptado = desencriptar(textoEncriptado);
        document.getElementById("textoSalida").textContent = textoDesencriptado;
        document.getElementById("botonCopiar").style.display = "block"; // Mostrar botón de copiar
    }
};

// Función para limpiar el texto
document.getElementById("botonLimpiar").onclick = function() {
    document.getElementById("textoEntrada").value = '';
    document.getElementById("textoSalida").textContent = 'Ningún mensaje fue encontrado. Ingresa el texto que desees encriptar o desencriptar.';
    document.getElementById("botonCopiar").style.display = "none"; // Ocultar botón de copiar
};

// Función para copiar el texto al portapapeles
document.getElementById("botonCopiar").onclick = function() {
    const texto = document.getElementById("textoSalida").textContent;
    navigator.clipboard.writeText(texto).then(function() {
        alert("Texto copiado al portapapeles");
    }, function() {
        alert("Hubo un error al copiar el texto");
    });
};
