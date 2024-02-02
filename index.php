<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Tickets</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="contenedor_formulario">
        <div class="titulo">
            <img src="img/LogoARB_PNG.png" alt=""><br>
        </div>
        <form action="enviar.php" method="post" onsubmit="return prepararEnvio()">
            <div class="fila">
                <div class="fila_hijo">
                    <label>RESUMEN DEL PROBLEMA</label><br><br>
                    <label class="label_input"><i class="fa-solid fa-ticket" style="color: #fff;"></i><input type="text" name="resumen_problema" placeholder="Resumen del problema"></label>
                </div>
                <div class="fila_hijo">
                    <label>IMAGEN</label><br><br>
                    <label for="" class="label_input"><i class="fa-solid fa-image" style="color: #ffffff;"></i><input type="file" name="imagenes" placeholder="Imagen" id="imagenInput" onchange="mostrarImagen(event)" accept="image/*" class="btn_imagenes"></label>
                    
                    <input type="hidden" id="inputImagenes" name="inputImagenes">
                    <div id="imagenesPrevias"></div>
                </div>
            </div>

            <label>DETALLE DEL PROBLEMA</label><br><br>
            <label for="" class="label_input"><i class="fa-solid fa-ticket" style="color: #fff;"></i><textarea name="detalle_problema" maxlength="500" style="width: 780px;" placeholder="Detalle del problema"></textarea></label>



            <div class="fila">
                <div class="fila_hijo">
                    <label>CORREO</label><br><br>
                    <label for="" class="label_input"><i class="fa-solid fa-envelope" style="color: #ffffff;"></i><input type="email" name="correo" placeholder="Correo" onclick="ValidarCorreo()"></label>
                </div>
                <div class="fila_hijo">
                    <label>TELEFONO</label><br><br>
                    <label for="" class="label_input"><i class="fa-solid fa-phone" style="color: #ffffff;"></i><input type="number" name="telefono" placeholder="Telefono"></label>
                </div>
            </div>

            <div class="fila">
                <div class="fila_hijo">
                    <label>NOMBRE</label><br><br>
                    <label for="" class="label_input"><i class="fa-solid fa-address-card" style="color: #ffffff;"></i><input type="text" name="nombre" placeholder="Nombre"></label>
                </div>
                <div class="fila_hijo">
                    <label>APELLIDO</label><br><br>
                    <label for="" class="label_input"><i class="fa-solid fa-address-card" style="color: #ffffff;"></i><input type="text" name="apellido" placeholder="Apellido"></label>
                </div>
            </div>
            <input type="submit" value="Enviar" class="btn">
        </form>
    </div>
</body>
<script src="validaciones.js"></script>
<script src="https://kit.fontawesome.com/84339ecbcb.js" crossorigin="anonymous"></script>

</html>