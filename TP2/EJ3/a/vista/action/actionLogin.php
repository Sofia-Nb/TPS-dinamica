<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login bootstrap</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="assets/css/bootstrap.css" />
</head>
<body>
<?php
include_once '../../control/VerificaPass.php';
include_once '../utils/datasubmitted.php';

$datos = datasubmitted();
$objVerifica = new VerificaPass();
$usuario = $objVerifica->obtenerDatos($datos);

if ($usuario) {
    $usuarioLogin = htmlspecialchars($datos['usuario']);
    echo "<script>
            alert (✅ Bienvenido, $usuarioLogin);
          <scrpt>";
} else {
    echo "<script>
            alert (❌ Usuario o clave incorrectos);
          <script> 
          ";
}
?>
</body>
</html>
