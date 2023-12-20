<?php
// Configuración de la conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tickets_arbusta";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Recoger los datos del formulario
$resumen_problema = $_POST['resumen_problema'];
$detalle_problema = $_POST['detalle_problema'];
$imagenes = $_POST['inputImagenes'];
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];

if (empty($resumen_problema) || empty($detalle_problema) || empty($imagenes) || empty($nombre) || empty($apellido) || empty($correo) || empty($telefono)) {
    echo "<script>alert('POR FAVOR LLENE TODOS LOS CAMPOS'); window.location.href = 'index.php';</script>";
} else {
    // Preparar la consulta SQL para insertar datos en la tabla
    $sql = "INSERT INTO tickets(resumen_problema, detalle_problema, imagenes, correo, telefono, nombre_completo) VALUES ('$resumen_problema','$detalle_problema','$imagenes','$correo','$telefono','$nombre_completo')";

    // Ejecutar la consulta y verificar si fue exitosa
    if ($conn->query($sql) === TRUE) {
        // Si se guardan los datos correctamente, mostrar alerta y redirigir con JavaScript
        echo "<script>alert('Datos guardados correctamente en la base de datos'); window.location.href = 'index.php';</script>";
        // Puedes cambiar 'formulario.php' por la ruta correcta a tu formulario
    } else {
        echo "Error al guardar datos: " . $conn->error;
    }
}




// Cerrar la conexión
$conn->close();
