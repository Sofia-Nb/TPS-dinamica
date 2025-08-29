<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Resultado del Formulario</title>
    <link href="../bootstrap-5.1.3-dist/css/bootstrap.css" rel="stylesheet">
</head>
<body>
    <div class="form-container">
        <?php
        include_once '../../control/Estudios.php';
        include_once '../utils/datasubmitted.php';
        $datos = datasubmitted();
        $objPersona = new Estudios();
        $arreglo = $objPersona->estudios($datos);
        $sexo = $arreglo[0];
        $estudios = $arreglo[1];

        // Mostrar el mensaje
        echo "<h1>Sexo: $sexo</h1>";
        echo "<h1>Nivel de Estudios: $estudios</h1>";
        ?>
    </div>
        <!-- Enlace para volver al formulario -->
    <a class="text-decoration-none" href= "../5formEstudios.html">Volver al formulario</a>
</body>
</html>
