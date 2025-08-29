<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>formulario-subir-archivo</title>
    <link href="bootstrap-5.1.3-dist/css/bootstrap.css" rel="stylesheet">
</head>

<body>

<?php
include_once '../../control/Archivo.php';
include_once '../utils/datasubmitted.php';

$datos = datasubmitted();
$objServidor = new Archivo();
$arrayValidar = $objServidor->obtenerArchivo($datos);


if (isset($arrayValidar['error'])) {
    echo "ERROR: No se pudo cargar el archivo. Código de error: " . $arrayValidar['error'];
} elseif (!$arrayValidar['pdfoword']) {
    echo "ERROR: El tipo de archivo no es válido. Solo se permiten archivos .pdf y .doc.";
} elseif (!$arrayValidar['tamaño']) {
    echo "ERROR: El archivo excede el tamaño máximo permitido de 2MB.";
} elseif (!$arrayValidar['subido']) {
    echo "ERROR: No se pudo guardar el archivo.";
} else {
    echo "Archivo subido con éxito. <a href='" . $arrayValidar['ruta'] . "'>Ver archivo</a>";
}
echo "<br>";
echo "<div class='contenedor-centrado'><a href='../index.html' class='btn'>Volver a la página anterior</a><div/>";
?>
</body>
</html>