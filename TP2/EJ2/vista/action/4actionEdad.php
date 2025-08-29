<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado</title>
    <link href="../bootstrap-5.1.3-dist/css/bootstrap.css" rel="stylesheet">
</head>
<body>
    <?php
    include_once '../../control/Edad.php';
    include_once '../utils/datasubmitted.php';
    $objEdad = new Edad();
    $datos = datasubmitted();
    $verifica = $objEdad->obtenerEdad($datos);

    // Verificar si la persona es mayor o menor de edad
    if ($verifica) {
        echo "<h1>Sos mayor de edad.</h1>";
    } else {
        echo "<h1>Sos menor de edad.</h1>";
    }
    ?>

    <!-- Enlace para volver al formulario -->
    <a class="text-decoration-none" href= "../4formEdad.html">Volver al formulario</a>
</body>