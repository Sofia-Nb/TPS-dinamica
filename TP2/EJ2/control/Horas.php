<?php	
class Horas{
    public function obtenerHoras($hora) {
        if (isset($hora['horas'])) {
            $horas = $hora['horas'];
            $totalHoras = 0;
            foreach ($horas as $hora) {
                $totalHoras += intval($hora);
            }
    }
    return $totalHoras;
}
}