document.addEventListener("DOMContentLoaded", function () {
  const formulario1 = document.getElementById("form1");
  const formulario3 = document.getElementById("form3");

if (formulario1) {
  formulario1.addEventListener("submit", function (event) {

    const numero = document.getElementById("numero").value.trim();

    // Validar número
    if (numero === "") {
      event.preventDefault();
      alert("El número es obligatorio.");
      return;
    } 
    if (isNaN(numero)) {
      event.preventDefault();
      alert("Debes ingresar un número válido.");
      return;
    }

    alert("Formulario enviado con éxito ✅");
    this.submit();
  });
}

if (formulario3) {
  formulario3.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const edad = document.getElementById("edad").value.trim();
    const direccion = document.getElementById("direccion").value.trim();

    // ✅ Validar nombre
    if (nombre === "") {
      alert("El nombre es obligatorio.");
      return;
    }
    if (!/^[a-zA-Z\s]+$/.test(nombre)) {
      alert("El nombre solo puede contener letras y espacios.");
      return;
    }

    // ✅ Validar direccion
    if (direccion === "") {
      alert("La direccion es obligatoria.");
      return;
    }

    // ✅ Validar apellido
    if (apellido === "") {
      alert("El apellido es obligatorio.");
      return;
    }
    if (!/^[a-zA-Z\s]+$/.test(apellido)) {
      alert("El apellido solo puede contener letras y espacios.");
      return;
    }

    // ✅ Validar edad
    if (edad === "") {
      alert("La edad es obligatoria.");
      return;
    }
    if (isNaN(edad)) {
      alert("La edad debe ser un número.");
      return;
    }
    if (parseInt(edad) < 0) {
      alert("La edad no puede ser negativa.");
      return;
    }

    // Si todo está ok
    alert("Formulario enviado con éxito ✅");
    formulario3.submit(); 
  });
}

});