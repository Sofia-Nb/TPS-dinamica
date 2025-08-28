<?php
include_once '../../control/NumeroTipo.php';
include_once '../utils/datasubmitted.php'; 

$dato = datasubmitted();
$objNumero = new NumeroTipo();
$numero = $objNumero->numero($dato);
if ($dato) {
    if ($numero > 0) {
        $mensaje = "El número $numero es positivo.";
    } elseif ($numero < 0) {
        $mensaje = "El número $numero es negativo.";
    } else {
        $mensaje = "El número es cero.";
    }
} else {
    $mensaje = "No se envió ningún número.";
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado</title>
</head>
<body>
    <h1>Resultado</h1>
    <p><?php echo $mensaje; ?></p>
    <a href="../formNumero.html" class="btn">Volver a la página anterior</a>
</body>
</html>
