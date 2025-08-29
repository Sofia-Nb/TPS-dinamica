$('#form1').submit(function(event) {
    var numero = $('#numero').val(); // valor del input de contraseña
    var errorMessage = '';
    // Validación: campo obligatorio
    if (!numero) {
        errorMessage = 'El número es obligatorio.';
    }
    // Validación: longitud mínima (por ejemplo 6 caracteres)
    else if (isNaN(numero)) {
        errorMessage = 'Debe ser un número.';
    }
    if (errorMessage) {
        event.preventDefault(); 
        $('#error-message').text(errorMessage);
    }
});

$('#form2').submit(function(event) {
    let errorMessage = "";

    // Validar lunes
    let lunes = $('#lunes').val().trim();
    let lunesNum = parseInt(lunes);
    if (lunes === "" || isNaN(lunesNum) || lunesNum < 0 || lunesNum > 24) {
        errorMessage = "Todos los campos deben ser válidos.";
    }

    // Validar martes
    let martes = $('#martes').val().trim();
    let martesNum = parseInt(martes);
    if (!errorMessage && (martes === "" || isNaN(martesNum) || martesNum < 0 || martesNum > 24)) {
        errorMessage = "Todos los campos deben ser válidos.";
    }

    // Validar miércoles
    let miercoles = $('#miercoles').val().trim();
    let miercolesNum = parseInt(miercoles);
    if (!errorMessage && (miercoles === "" || isNaN(miercolesNum) || miercolesNum < 0 || miercolesNum > 24)) {
        errorMessage = "Todos los campos deben ser válidos.";
    }

    // Validar jueves
    let jueves = $('#jueves').val().trim();
    let juevesNum = parseInt(jueves);
    if (!errorMessage && (jueves === "" || isNaN(juevesNum) || juevesNum < 0 || juevesNum > 24)) {
        errorMessage = "Todos los campos deben ser válidos.";
    }

    // Validar viernes
    let viernes = $('#viernes').val().trim();
    let viernesNum = parseInt(viernes);
    if (!errorMessage && (viernes === "" || isNaN(viernesNum) || viernesNum < 0 || viernesNum > 24)) {
        errorMessage = "Todos los campos deben ser válidos.";
    }

    // Mostrar mensaje de error y bloquear envío si hay error
    if (errorMessage) {
        event.preventDefault();
        $('#error-message').text(errorMessage);
    }
});



$('#form3').submit(function(event) {
    event.preventDefault(); // detener envío

    // Limpiar mensajes anteriores
    $('#error-message-nombre, #error-message-apellido, #error-message-edad, #error-message-direccion').html('');

    var nombre = $('#nombre').val().trim();
    var apellido = $('#apellido').val().trim();
    var edad = $('#edad').val().trim();
    var direccion = $('#direccion').val().trim();

    var formValido = true;

    if (nombre === '') {
        $('#error-message-nombre').html('El nombre es obligatorio.');
        formValido = false;
    }

    if (apellido === '') {
        $('#error-message-apellido').html('El apellido es obligatorio.');
        formValido = false;
    }

    if (edad === '') {
        $('#error-message-edad').html('La edad es obligatoria.');
        formValido = false;
    } else if (!Number.isInteger(Number(edad)) || Number(edad) < 0) {
        $('#error-message-edad').html('La edad debe ser un número entero mayor o igual a 0.');
        formValido = false;
    }

    if (direccion === '') {
        $('#error-message-direccion').html('La dirección es obligatoria.');
        formValido = false;
    }

    // Si pasa todas las validaciones, enviar formulario
    if (formValido) {
        this.submit();
    }
});


$('#form4').submit(function(event) {
    var edad = $('#edad').val().trim();
        var errorMessage = '';

        // Limpiar mensaje anterior
        $('#error-message').text('');
        // Validar vacío
        if (edad === '') {
            errorMessage = 'La edad es obligatoria.';
        }
        if (errorMessage !== '') {
            $('#error-message').text(errorMessage);
            return false; // evitar envío
        }
         // Si pasa la validación, enviar formulario
        this.submit();
});


$('#form5').submit(function(event) {
        event.preventDefault(); // detener envío hasta que todo esté correcto

        var formValido = true;

        // Limpiar mensajes anteriores
        $('#mensaje_sexo').text('');
        $('#error-message').text('');

        // Validar sexo
        if ($('input[name="sexo"]:checked').length === 0) {
            $('#message_sexo').text('Debe elegir una opción de sexo.');
            formValido = false;
        }

        // Validar nivel de estudios
        if ($('input[name="estudios"]:checked').length === 0) {
            $('#error-message').text('Debe elegir un nivel de estudios.');
            formValido = false;
        }

        // Si todo es válido, enviar formulario
        if (formValido) {
            this.submit();
        }
});


$('#form6').submit(function(event) {
    event.preventDefault(); // detener envío hasta que todo esté correcto

        var formValido = true;

         // Validar sexo
        if ($('input[name="sexo"]:checked').length === 0) {
            $('#error-message').text('Debe seleccionar un sexo.');
            formValido = false;
        }
        // Validar nivel de estudios
        else if ($('input[name="estudios"]:checked').length === 0) {
            $('#error-message').text('Debe seleccionar un nivel de estudios.');
            formValido = false;
        }
        // Validar al menos un deporte
        else if ($('input[name="deportes[]"]:checked').length === 0) {
            $('#error-message').text('Debe seleccionar al menos un deporte.');
            formValido = false;
        }

        // Si todo es válido, enviar formulario
        if (formValido) {
            this.submit();
        }
});

$('#form7').submit(function(event) {
   $(document).ready(function() {
    $('#form7').submit(function(event) {
        event.preventDefault(); // detener envío hasta que todo sea válido

        var errorMessage = '';
        var numero1 = $('#numero1').val().trim();
        var numero2 = $('#numero2').val().trim();
        var operacion = $('#operacion').val();

        // Limpiar mensaje anterior
        $('#error-message').text('');

        // Validar números
        if (numero1 === '' || isNaN(numero1)) {
            errorMessage = 'Número 1 debe ser un número válido.';
        } else if (numero2 === '' || isNaN(numero2)) {
            errorMessage = 'Número 2 debe ser un número válido.';
        }

        // Validar operación
        else if (!operacion) {
            errorMessage = 'Debe seleccionar una operación.';
        }

        if (errorMessage !== '') {
            $('#error-message').text(errorMessage);
            return false; // evitar envío
        }

        // Si todo es válido, enviar formulario
        this.submit();
    });
});

$('#form8').submit(function(event) {
    event.preventDefault(); // detener envío hasta que todo sea válido

        var errorMessage = '';
        var edad = $('#edad').val().trim();
        var estudiante = $('input[name="estudiante"]:checked').val();

        // Limpiar mensaje anterior
        $('#error-message').text('');

        // Validar edad
        if (edad === '' || isNaN(edad) || !Number.isInteger(Number(edad)) || Number(edad) < 0) {
            errorMessage = 'Ingrese una edad válida (entero >= 0).';
        }
        // Validar estudiante
        else if (!estudiante) {
            errorMessage = 'Debe seleccionar si es estudiante o no.';
        }

        if (errorMessage !== '') {
            $('#error-message').text(errorMessage);
            return false; // evitar envío
        }

        // Si todo es válido, enviar formulario
        this.submit();
    });
});