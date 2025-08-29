<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="../assets/style7.css">
    <title>Resultado de la Operación</title>
</head>
<body>
    <?php
    include_once '../../control/Operacion.php';
    include_once '../utils/datasubmitted.php';
    $datos = datasubmitted();
    $objOperaciones = new Operacion();
    $arrayDatos = $objOperaciones->operaciones($datos);

    if ($arrayDatos) {
        $operacion = $arrayDatos[0];
        $numero1 = $arrayDatos[1];
        $numero2 = $arrayDatos[2];
        $resultado = $arrayDatos[3];

        // Mostrar el resultado
        echo "<h2>Resultado de la Operación</h2>";
        echo "<p>Operación: $operacion </p>";
        echo "<p>Número 1: $numero1 </p>";
        echo "<p>Número 2: $numero2</p>";
        echo "<p>Resultado: $resultado</p>";
    } else {
        echo "<p>Error: No se pudieron procesar los datos.</p>";
    }
        echo "<br>";
        echo "<a href='../7formOperacion.html' class='btn'>Volver a la página anterior</a>";
    ?>
    
</body>
</html>