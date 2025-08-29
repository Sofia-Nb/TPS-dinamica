<?php
class Estudios{
    public function estudios($dato){
               // Obtener los datos del formulario
               $sexo = htmlspecialchars($dato['sexo']);
               $estudios = htmlspecialchars($dato['estudios']);

               $arrayRespuesta = array (
                $sexo,
                $estudios,
               );

               return $arrayRespuesta;
    }
}