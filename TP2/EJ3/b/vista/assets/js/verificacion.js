$(document).ready(function () {
    $('#loginForm').submit(function (event) {

      event.preventDefault();
  
      var usuario = $('#usuario').val().trim();
      var clave = $('#clave').val().trim();
  
      $('#usuario, #clave').removeClass('is-invalid');
      
      if (usuario === '') {
        $('#usuario').addClass('is-invalid');
        Swal.fire('Error', 'Por favor, ingresa tu nombre de usuario.', 'error');
        return;
      }
  
      if (clave === '') {
        $('#clave').addClass('is-invalid');
        Swal.fire('Error', 'Por favor, ingresa tu contraseña.', 'error');
        return;
      }
  
      if (clave.length < 8) {
        $('#clave').addClass('is-invalid');
        Swal.fire('Error', 'La contraseña debe tener al menos 8 caracteres.', 'error');
        return;
      }
  
      if (clave === usuario) {
        $('#clave').addClass('is-invalid');
        Swal.fire('Error', 'La contraseña no puede ser igual al nombre de usuario.', 'error');
        return;
      }

      var regex = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
      if (!regex.test(clave)) {
        $('#clave').addClass('is-invalid');
        Swal.fire('Error', 'La contraseña debe contener al menos una letra y un número.', 'error');
        return;
      }
      Swal.fire('¡Éxito!', 'Formulario enviado con éxito.', 'success');
    });
  });
  