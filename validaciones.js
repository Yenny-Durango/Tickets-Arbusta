let imagenCount = 0;
let imagenesSeleccionadas = [];

function agregarCampoImagen() {
  const contenedor = document.getElementById('contenedor-imagenes');
  const input = document.createElement('input');
  input.type = 'file';
  input.name = 'imagenes[]';
  input.accept = 'image/*';
  contenedor.appendChild(input);
}

function validarFormulario() {

  var nombre = document.getElementsByName('nombre')[0].value;
  var apellido = document.getElementsByName('apellido')[0].value;
  var resumenProblema = document.getElementsByName('resumen_problema')[0].value;
  var detalleProblema = document.getElementsByName('detalle_problema')[0].value;
  var correo = document.getElementsByName('correo')[0].value;
  var telefono = document.getElementsByName('telefono')[0].value;
  var imagenes = document.getElementsByName('imagenes')[0].value;

  var nombreApellidoValido = validarNombreApellido(nombre, apellido);
  var resumenDetalleValido = validarResumenDetalle(resumenProblema, detalleProblema);
  var correoValido = validarCorreo(correo);
  var telefonoValido = validarTelefono(telefono);
  var imagenesValidas = mostrarImagen(imagenes);

  return nombreApellidoValido && resumenDetalleValido && correoValido && telefonoValido && imagenesValidas;
}

function validarResumenDetalle(resumen, detalle) {
  var palabrasResumen = resumen.trim().split(/\s+/).filter(Boolean); // Filtra las palabras vacías
  var palabrasDetalle = detalle.trim().split(/\s+/).filter(Boolean); // Filtra las palabras vacías

  // Verificar si el detalle es igual al resumen (ignorando mayúsculas y minúsculas)
  if (resumen.toLowerCase() === detalle.toLowerCase()) {
    alert("El detalle del problema no puede ser igual al resumen del problema");
    return false; // Detener el envío del formulario
  }

  // Verificar si el detalle tiene menos de 3 palabras
  if (palabrasDetalle.length < 3) {
    alert("El detalle del problema debe contener al menos 3 palabras");
    return false; // Detener el envío del formulario
  }

  return true; // Permitir el envío del formulario si la validación pasa
}


function validarCorreo(correo) {
  var patron = /@arbusta\.net$/;

  if (!patron.test(correo)) {
    alert("Por favor, ingresa un correo corporativo válido (@arbusta.net)");
    return false; // Detener el envío del formulario
  }
  return true; // Permitir el envío del formulario si la validación pasa
}

function validarTelefono(telefono) {
  var patronTelefono = /^\d{10}$/; // Asegura que haya exactamente 10 dígitos

  if (!patronTelefono.test(telefono)) {
    alert("Por favor, ingresa un número de teléfono válido con exactamente 10 dígitos");
    return false; // Detener el envío del formulario
  }
  return true; // Permitir el envío del formulario si la validación pasa
}

function validarNombreApellido(nombre, apellido) {
  var patronNombreApellido = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s]+$/; // Acepta letras, espacios y letras con tilde/diéresis

  if (nombre.trim() === '' || apellido.trim() === '') {
    alert("Por favor, ingresa tanto el nombre como el apellido");
    return false; // Detener el envío del formulario
  }

  if (!patronNombreApellido.test(nombre) || !patronNombreApellido.test(apellido)) {
    alert("El nombre y apellido no pueden contener números ni caracteres especiales");
    return false; // Detener el envío del formulario
  }

  return true; // Permitir el envío del formulario si la validación pasa
}

function mostrarImagen(event) {
  if (imagenCount < 5) {
    const imagenesPrevias = document.getElementById("imagenesPrevias");
    const imagen = document.createElement("img");
    const file = event.target.files[0]; // Obtener el archivo seleccionado

    // estilos imagenes
    var imagenes = document.getElementById("imagenesPrevias");

    imagenes.style.display = 'flex';
    imagenes.style.padding = '5px';
    imagenes.style.gap = '10px';
    imagenes.style.margin = '15px 0';
    imagenes.style.width = '400px';
    imagenes.style.overflow = 'auto';
    imagenes.style.backgroundColor = '#ffffff21';


    // Verificar que se haya seleccionado un archivo
    if (file) {
      imagen.src = URL.createObjectURL(file);

      const eliminarBtn = document.createElement("button");
      eliminarBtn.textContent = "X";
      eliminarBtn.onclick = function () {
        imagenesPrevias.removeChild(imagen.parentElement);
        imagenCount--;

        // Eliminar el nombre del archivo del array al hacer clic en "Eliminar"
        const index = imagenesSeleccionadas.indexOf(file.name);
        if (index !== -1) {
          imagenesSeleccionadas.splice(index, 1);
        }
      };

      // estilo boton eliminar imagen
      eliminarBtn.style.backgroundColor = 'red';
      eliminarBtn.style.borderRadius = '60%';
      eliminarBtn.style.color = 'white';
      eliminarBtn.style.fontWeight = 'bold';
      eliminarBtn.style.border = 'none';
      eliminarBtn.style.padding = '5px';
      eliminarBtn.style.cursor = 'pointer';
      eliminarBtn.style.fontSize = '10px';
      eliminarBtn.style.margin = 'auto';
      eliminarBtn.style.display = 'flex';

      eliminarBtn.title = 'Eliminar';

      const contenedor = document.createElement("div");
      contenedor.appendChild(imagen);
      contenedor.appendChild(eliminarBtn);
      imagenesPrevias.appendChild(contenedor);

      imagenCount++;

      // Almacenar el nombre del archivo en el array al mostrar la imagen
      imagenesSeleccionadas.push(file.name);

      // Verificar que se haya seleccionado un archivo y que el campo no esté vacío
      if (!file || file.trim() === '') {
        alert("Por favor, inserta una imagen de referencia");
        return false; // Detener el envío del formulario
      }
    }
  } else {
    alert("Solo se permiten hasta 5 imágenes.");
  }
}

function prepararEnvio() {
  // Asignar el array de nombres de imágenes al campo oculto del formulario
  const inputImagenes = document.getElementById("inputImagenes");
  inputImagenes.value = JSON.stringify(imagenesSeleccionadas);
  return validarFormulario(); // Validar el formulario antes del envío
}