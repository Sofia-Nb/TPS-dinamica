<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Resultado de la Entrada</title>
    <link rel="stylesheet" href="../assets/style8.css">
</head>
<body>
    <div class="form-container">
        <?php
        include_once '../../control/PrecioCine.php';
        include_once '../utils/datasubmitted.php';
        $datos = datasubmitted();
        $objCalculo = new PrecioCine();
        $respuesta = $objCalculo->sacarPrecio($datos);
        $edad = $respuesta[0];
        $es_estudiante = $respuesta[1];
        $precio = $respuesta[2];
        echo "<h2>Precio de tu entrada</h2>";
        echo "<p>Edad: $edad años</p>";
        echo "<p>Estudiante: " . ($es_estudiante == 'si' ? 'Sí' : 'No') . "</p>";
        echo "<p>Precio a pagar: \$$precio</p>";
        ?>
    </div>
    <a href= "../8formCine.html">Volver al formulario</a>
</body>
</html>
