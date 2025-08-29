<?php
include_once '../vista/utils/datasubmitted.php';
$datos = datasubmitted();
$users = [
    ['usuario' => 'admin', 'clave' => '11admin11'],  // Usuario 1
    ['usuario' => 'user1', 'clave' => '1234abcd'],  // Usuario 2
    ['usuario' => 'juan', 'clave' => '2211abcd'],  // Usuario 3
];

if (isset($datos['usuario']) && isset($datos['clave'])) {
    $usuario = $datos['usuario'];  
    $clave = $datos['clave'];     
    $found = false; 
    foreach ($users as $user) {
        if ($user['usuario'] === $usuario && $user['clave'] === $clave) {
            $found = true; 
            break;  
    }
    }

    if ($found) {
        echo json_encode(['status' => 'success', 'message' => 'Bienvenido, ' . $usuario . '!']);
    } 
}
?>
