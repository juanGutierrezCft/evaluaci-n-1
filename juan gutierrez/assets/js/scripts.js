function Datos() {
    let nombre = document.getElementsByName("nombre")[0].value;
    let apellido = document.getElementsByName("apellido")[0].value;
    let telefono = document.getElementsByName("telefono")[0].value;
    let carrera = document.getElementsByName("carrera")[0].value;
    let edad = document.getElementsByName("edad")[0].value;
    let mensaje = document.getElementsByName("mensaje")[0].value;

    let validar_nombre = document.getElementById("validar_nombre");
    let validar_apellido = document.getElementById("validar_apellido");
    let validar_telefono = document.getElementById("validar_telefono");
    let validar_carrera = document.getElementById("validar_carrera");
    let validar_edad = document.getElementById("validar_edad");
    let validar_mensaje = document.getElementById("validar_mensaje");

    // Validación de nombre

    if (nombre.trim() === "") {
        alert("Mensaje no enviado. Revisa los datos ingresados. Debes ingresar todos los campos de forma correcta.");
        return false;
    }
    if (!isNaN(nombre)) {
        alert("Mensaje no enviado. Revisa los datos ingresados. Debes ingresar todos los campos de forma correcta.");
        return false;
    }

    // Validación de apellido

    if (apellido.trim() === "") {
        alert("Mensaje no enviado. Revisa los datos ingresados. Debes ingresar todos los campos de forma correcta.");
        return false;
    }
    if (!isNaN(apellido)) {
        alert("Mensaje no enviado. Revisa los datos ingresados. Debes ingresar todos los campos de forma correcta.");
        return false;
    }

    // Validación de telefono

    if (telefono.trim() === "") {
        alert("Mensaje no enviado. Revisa los datos ingresados. Debes ingresar todos los campos de forma correcta.");
        return false;
    }
    if (telefono < 222222222 || telefono > 999999999) {
        alert("Mensaje no enviado. Revisa los datos ingresados. Debes ingresar todos los campos de forma correcta.");
        return false;
    }

    // Validación de carrera

    if (carrera.trim() === "") {
        alert("Mensaje no enviado. Revisa los datos ingresados. Debes ingresar todos los campos de forma correcta.");
        return false;
    }
    if (!isNaN(carrera)) {
        alert("Mensaje no enviado. Revisa los datos ingresados. Debes ingresar todos los campos de forma correcta.");
        return false;
    }

    // Validación de edad

    if (edad.trim() === "") {
        alert("Mensaje no enviado. Revisa los datos ingresados. Debes ingresar todos los campos de forma correcta.");
        return false;
    }
    if (edad < 16 || edad > 61) {
        alert("Mensaje no enviado. Revisa los datos ingresados. Debes ingresar todos los campos de forma correcta.");
        return false;
    }

    // Validación de mensaje

    if (mensaje.trim() === "") {
        alert("Mensaje no enviado. Revisa los datos ingresados. Debes ingresar todos los campos de forma correcta.");
        return false;
    }
    if (!isNaN(mensaje) || /^\d+$/.test(mensaje)) {
        alert("Mensaje no enviado. Revisa los datos ingresados. Debes ingresar todos los campos de forma correcta.");
    }

    // Validación exitosa

    else {
        alert('Datos enviados correctamente');
        return true;
    }
}