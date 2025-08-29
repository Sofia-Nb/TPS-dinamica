$(document).ready(function () {
    $('#loginForm').submit(function (event) {

        var usuario = $('#usuario').val().trim();
        var clave = $('#clave').val().trim();

        $('#usuario, #clave').removeClass('is-invalid');

        if (usuario === '') {
            event.preventDefault(); 
            $('#usuario').addClass('is-invalid');
            Swal.fire('Error', 'Por favor, ingresa tu nombre de usuario.', 'error');
            return;
        }

        if (clave === '') {
            event.preventDefault(); 
            $('#clave').addClass('is-invalid');
            Swal.fire('Error', 'Por favor, ingresa tu contraseña.', 'error');
            return;
        }

    });
});
