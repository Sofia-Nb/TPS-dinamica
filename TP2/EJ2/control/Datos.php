<?php

class Datos{
    public function obtenerDatos($dato) {
        $nombre = htmlspecialchars($dato['nombre']);
        $apellido = htmlspecialchars($dato['apellido']);
        $edad = filter_var($dato['edad'], FILTER_VALIDATE_INT, [
    'options' => ['min_range' => 0]
]);

        $direccion = htmlspecialchars($dato['direccion']);
        $arrays = array (
            'nombre' => $nombre,
            'apellido' =>$apellido,
            'edad' => $edad,
            'direccion' => $direccion
        );

          return $arrays;

}
}

?>
