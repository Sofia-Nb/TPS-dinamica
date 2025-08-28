<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Total de Horas</title>
</head>
<body>
    <div class="container">
        <?php
        include_once '../../control/Horas.php';
        include_once '../utils/datasubmitted.php'; 

        $dato = datasubmitted();
        $objHoras = new Horas();
        $totalHoras = $objHoras->obtenerHoras($dato); // Pasar el array GET al método

        if ($totalHoras > 0) {
            echo "<h1>Total de horas de cursada por semana</h1>";
            echo "<p>La cantidad total de horas que se cursan por semana es: <strong>$totalHoras</strong> horas.</p>";
        } else {
            // Si no se recibieron horas o si el total es 0
            echo "<p>No se recibieron datos de horas o el total es cero.</p>";
        }
        ?>
        <!-- Botón para volver a la página principal -->
        <a href="../formCursadas.html" class="btn">Volver a la página principal</a>
    </div>
</body>
</html>