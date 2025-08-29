<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="../../Vista/assets/style6.css">
    <title>Resultado del Formulario</title>
</head>
<body>
    <div class="form-container">
        <?php  
        include_once '../../control/Ejercicio.php';
        include_once '../utils/datasubmitted.php';
        $datos = datasubmitted();
        $objPersona = new Ejercicio();
        $arreglo = $objPersona->ejercicio($datos);
        $sexo = $arreglo[0];
        $estudios = $arreglo[1];
        $cantidad_deportes = $arreglo[2];
        echo "<h1>Sexo: $sexo</h1>";
        echo "<h1>Nivel de Estudios: $estudios</h1>";
        echo "<h1>Practicas $cantidad_deportes deporte(s).</h1>";
        echo "<br>";
        echo "<a href='../6formEjercicios.html' class='btn'>Volver a la página anterior</a>";
        ?>
    </div>
</body>
</html>
