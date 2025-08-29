document.addEventListener("DOMContentLoaded", function () {
  const formulario1 = document.getElementById("form1");
  const formulario3 = document.getElementById("form3");
  const formulario2 = document.getElementById("form2");


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

if (formulario2) {
  formulario2.addEventListener("submit", function (event) {

    const lunes = document.getElementById("lunes").value.trim();
    const martes = document.getElementById("martes").value.trim();
    const miercoles = document.getElementById("miercoles").value.trim();
    const jueves = document.getElementById("jueves").value.trim();
    const viernes = document.getElementById("viernes").value.trim();

    // Validar número
    if (lunes === "") {
      event.preventDefault();
      alert("Lunes es obligatorio.");
      return;
    }else if(!Number.isInteger(Number(lunes)) || Number(lunes) > 24){
      event.preventDefault();
      alert("Debes ingresar un número válido.");
      return;
    }


    if (martes === "") {
      event.preventDefault();
      alert("Martes es obligatorio.");
      return;
    }else if(!Number.isInteger(Number(martes)) || Number(martes) > 24){
      event.preventDefault();
      alert("Debes ingresar un número válido.");
      return;
    }

    if (miercoles === "") {
      event.preventDefault();
      alert("Miercoles es obligatorio.");
      return;
    }else if(!Number.isInteger(Number(miercoles)) || Number(miercoles) > 24){
      event.preventDefault();
      alert("Debes ingresar un número válido.");
      return;
    }

    if (jueves === "") {
      event.preventDefault();
      alert("Jueves es obligatorio.");
      return;
    }else if(!Number.isInteger(Number(jueves)) || Number(jueves) > 24){
      event.preventDefault();
      alert("Debes ingresar un número válido.");
      return;
    }

    if (viernes === "") {
      event.preventDefault();
      alert("Viernes es obligatorio.");
      return;
    }else if(!Number.isInteger(Number(viernes)) || Number(viernes) > 24){
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

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const edad = document.getElementById("edad").value.trim();
    const direccion = document.getElementById("direccion").value.trim();

    // ✅ Validar nombre
    if (nombre === "") {
      event.preventDefault();
      alert("El nombre es obligatorio.");
      return;
    }
    if (!/^[a-zA-Z\s]+$/.test(nombre)) {
      event.preventDefault();
      alert("El nombre solo puede contener letras y espacios.");
      return;
    }

    // ✅ Validar direccion
    if (direccion === "") {
      event.preventDefault();
      alert("La direccion es obligatoria.");
      return;
    }

    // ✅ Validar apellido
    if (apellido === "") {
      event.preventDefault();
      alert("El apellido es obligatorio.");
      return;
    }
    if (!/^[a-zA-Z\s]+$/.test(apellido)) {
      event.preventDefault();
      alert("El apellido solo puede contener letras y espacios.");
      return;
    }

    // ✅ Validar edad
    if (edad === "") {
      event.preventDefault();
      alert("La edad es obligatoria.");
      return;
    }
    if (isNaN(edad)) {
      event.preventDefault();
      alert("La edad debe ser un número.");
      return;
    }
    if (parseInt(edad) < 0) {
      event.preventDefault();
      alert("La edad no puede ser negativa.");
      return;
    }

    alert("Formulario enviado con éxito ✅");
    formulario3.submit(); 
  });
}

});