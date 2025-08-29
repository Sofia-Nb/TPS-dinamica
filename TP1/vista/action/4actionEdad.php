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
    <a href= "../4formEdad.html">Volver al formulario</a>
</body>