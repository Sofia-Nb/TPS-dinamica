<?php
class VerificaPass {
    public function obtenerDatos($dato) {
        $users = [
            ['usuario' => 'admin', 'clave' => '11admin11'],
            ['usuario' => 'user1', 'clave' => '1234abcd'],
            ['usuario' => 'juan', 'clave' => '2211abcd'],
        ];

        $found = false;

        if (isset($dato['usuario']) && isset($dato['clave'])) {
            $usuario = trim($dato['usuario']);
            $clave   = trim($dato['clave']);

            foreach ($users as $user) {
                if ($user['usuario'] === $usuario && $user['clave'] === $clave) {
                    $found = true;
                    break; // ya encontramos, no hace falta seguir
                }
            }
        }
        return $found;
    }
}
