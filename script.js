/*/function agregarCita() {
 
    var cuerpoTabla = document.getElementById("cuerpo-tabla");


    var nuevaFila = document.createElement("tr");

  
    nuevaFila.innerHTML = `
        <td>Nuevo</td>
        <td>2024-04-01</td>
        <td>10:00 AM</td>
        <td>Cliente Nuevo</td>
        <td>Mascota Nueva</td>
        <td>Servicio Nuevo</td>
        <td>
            <a href="#"><i class="fas fa-edit"></i> Modificar</a>
            <a href="#" onclick="return confirmDelete();"><i class="fas fa-trash-alt"></i> Eliminar</a>
        </td>
    `;


    cuerpoTabla.appendChild(nuevaFila);
}/*/
// Función para mostrar el formulario de agregar cita
function mostrarFormularioAgregar() {
    const formularioContainer = document.getElementById('formularioAgregarContainer');
    formularioContainer.style.display = 'block';
}

// Función para mostrar el formulario de edición
function mostrarFormularioEdicion(folio) {
    // Aquí puedes implementar la lógica para mostrar el formulario de edición con los datos del registro correspondiente
    alert('Mostrar formulario de edición para la cita con folio ' + folio);
}

// Función para eliminar un registro
function eliminarRegistro(folio) {
    // Obtener la fila correspondiente al folio
    const fila = document.getElementById('row_' + folio);
    
    // Eliminar la fila de la tabla
    fila.parentNode.removeChild(fila);

    // Aquí puedes agregar la lógica adicional, como enviar una solicitud al servidor para eliminar el registro de la base de datos
}


// Función para agregar una cita
function agregarCita() {
    // Obtener los datos del formulario de agregar cita
    const formulario = document.getElementById('formularioAgregar');
    const fecha = formulario.elements['fecha'].value;
    const hora = formulario.elements['hora'].value;
    const nombreCliente = formulario.elements['nombreCliente'].value;
    const nombreMascota = formulario.elements['nombreMascota'].value;
    const tipoServicio = formulario.elements['tipoServicio'].value;
    
    // Obtener el último folio y calcular el siguiente
    const tablaCitas = document.getElementById('tabla-citas');
    const filas = tablaCitas.getElementsByTagName('tr');
    const ultimoFolio = parseInt(filas[filas.length - 1].cells[0].innerText);
    const nuevoFolio = ultimoFolio + 1;

    // Agregar la nueva fila a la tabla
    const nuevaFilaHTML = `
        <tr id="row_${nuevoFolio}">
            <td>${nuevoFolio}</td>
            <td>${fecha}</td>
            <td>${hora}</td>
            <td>${nombreCliente}</td>
            <td>${nombreMascota}</td>
            <td>${tipoServicio}</td>
            <td>
                <a href="#" onclick="mostrarFormularioEdicion(${nuevoFolio})"><i class="fas fa-edit"></i></a>
                <a href="#" onclick="eliminarRegistro(${nuevoFolio})" class="eliminar"><i class="fas fa-trash-alt"></i></a>
            </td>
        </tr>
    `;
    const cuerpoTabla = document.getElementById('cuerpo-tabla');
    cuerpoTabla.insertAdjacentHTML('beforeend', nuevaFilaHTML);

    // Limpiar el formulario y ocultarlo
    formulario.reset();
    const formularioContainer = document.getElementById('formularioAgregarContainer');
    formularioContainer.style.display = 'none';
}






function confirmDelete() {
    // Confirmar con el usuario si realmente desea eliminar el registro
    var confirmacion = confirm("¿Estás seguro de que deseas eliminar este registro?");
    return confirmacion;
}

document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los enlaces con la clase "eliminar"
    var enlacesEliminar = document.querySelectorAll(".eliminar");

    // Iterar sobre cada enlace "Eliminar"
    enlacesEliminar.forEach(function(enlace) {
        // Agregar un evento clic a cada enlace
        enlace.addEventListener("click", function(evento) {
            // Prevenir el comportamiento predeterminado del enlace
            evento.preventDefault();
            
            // Obtener la fila que contiene el enlace "Eliminar"
            var fila = enlace.parentNode.parentNode;
            
            // Confirmar con el usuario si realmente desea eliminar el registro
            var confirmacion = confirmDelete();
            
            // Si el usuario confirma la eliminación, eliminar la fila correspondiente de la tabla
            if (confirmacion) {
                fila.remove();
            }
        });
    });
});



// Función para mostrar el formulario de edición
function mostrarFormularioEdicion(id) {
    // Obtener los datos actuales del registro con el id proporcionado
    const fila = document.getElementById('row_' + id);
    const folio = fila.cells[0].innerText;
    const fecha = fila.cells[1].innerText;
    const hora = fila.cells[2].innerText;
    const nombreCliente = fila.cells[3].innerText;
    const nombreMascota = fila.cells[4].innerText;
    const tipoServicio = fila.cells[5].innerText;

    // Construir el formulario de edición con los datos actuales
    const formularioHTML = `
        <form id="formularioEditar">
            <input type="hidden" name="folio" value="${folio}">
            <label for="fecha">Fecha:</label>
            <input type="text" name="fecha" value="${fecha}">
            <label for="hora">Hora:</label>
            <input type="text" name="hora" value="${hora}">
            <label for="nombreCliente">Nombre del Cliente:</label>
            <input type="text" name="nombreCliente" value="${nombreCliente}">
            <label for="nombreMascota">Nombre de la Mascota:</label>
            <input type="text" name="nombreMascota" value="${nombreMascota}">
            <label for="tipoServicio">Tipo de Servicio:</label>
            <input type="text" name="tipoServicio" value="${tipoServicio}">
            <button type="button" onclick="actualizarRegistro(${id})">Actualizar</button>
        </form>
    `;

    // Mostrar el formulario en el contenedor deseado
    const formularioContainer = document.getElementById('formularioEditarContainer');
    formularioContainer.innerHTML = formularioHTML;
}

// Función para actualizar los datos del registro
function actualizarRegistro(id) {
    
    // Obtener los datos del formulario de edición
    const formulario = document.getElementById('formularioEditar');
    const folio = formulario.elements['folio'].value;
    const fecha = formulario.elements['fecha'].value;
    const hora = formulario.elements['hora'].value;
    const nombreCliente = formulario.elements['nombreCliente'].value;
    const nombreMascota = formulario.elements['nombreMascota'].value;
    const tipoServicio = formulario.elements['tipoServicio'].value;

    // Actualizar los datos del registro en la tabla
    const fila = document.getElementById('row_' + id);
    fila.cells[1].innerText = fecha;
    fila.cells[2].innerText = hora;
    fila.cells[3].innerText = nombreCliente;
    fila.cells[4].innerText = nombreMascota;
    fila.cells[5].innerText = tipoServicio;

    // Limpiar el contenedor del formulario
    const formularioContainer = document.getElementById('formularioEditarContainer');
    formularioContainer.innerHTML = '';
}





function iniciarSesion() {
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (email === "veterinario@example.com" && password === "contrasena1") {
        alert("Inicio de sesión exitoso como veterinario");
        window.location.href = "sesionin.html";
    } else if (email === "asistente@example.com" && password === "contrasena2") {
        alert("Inicio de sesión exitoso como asistente");
        window.location.href = "inicio_asistente.html";
    } else if (email === "cliente@example.com" && password === "contrasena3") {
        alert("Inicio de sesión exitoso como  Laura Martínez");
        window.location.href = "inicio_cliente.html";
    } else {
        alert("Correo electrónico o contraseña incorrectos");
    }
}



function crearCuenta() {
    var crearCuentaForm = document.getElementById("crear-cuenta-form");
    crearCuentaForm.style.display = "block";
}

function registrarCuenta() {
    var newEmail = document.getElementById("new-email").value;
    var newUsername = document.getElementById("new-username").value;
    var newPassword = document.getElementById("new-password").value;
    // Aquí puedes implementar la lógica para registrar la nueva cuenta
    // Por ejemplo, puedes enviar estos datos a un servidor para guardar la cuenta en una base de datos
    alert("Nueva cuenta registrada:\nCorreo Electrónico: " + newEmail + "\nUsuario: " + newUsername + "\nContraseña: " + newPassword);
    // Limpia el formulario después de registrar la cuenta
    document.getElementById("new-email").value = "";
    document.getElementById("new-username").value = "";
    document.getElementById("new-password").value = "";
    // Oculta el formulario de creación de cuenta después de registrar la cuenta
    document.getElementById("crear-cuenta-form").style.display = "none";
}


















var inventario = [
  { codigo: '001', nombre: 'Medicamento A', tipo: 'Medicamento', fechaVencimiento: '2024-06-30', fechaIngreso: '2024-03-20' },
  { codigo: '002', nombre: 'Vacuna X', tipo: 'Vacuna', fechaVencimiento: '2024-12-31', fechaIngreso: '2024-02-15' },
  { codigo: '003', nombre: 'Alimento para peces', tipo: 'Alimento', fechaVencimiento: '2024-09-15', fechaIngreso: '2024-01-10' },
  { codigo: '004', nombre: 'Shampoo para gatos', tipo: 'Higiene', fechaVencimiento: '2024-08-20', fechaIngreso: '2024-04-05' },
  { codigo: '005', nombre: 'Collar para perros', tipo: 'Accesorio', fechaVencimiento: '2024-11-10', fechaIngreso: '2024-03-25' }
];

var tabla = document.getElementById("tablaInventario");

function mostrarInventario() {
  tabla.innerHTML = '';
  inventario.forEach(function(producto) {
    var fila = tabla.insertRow();
    fila.innerHTML = '<td>' + producto.codigo + '</td>' +
                     '<td>' + producto.nombre + '</td>' +
                     '<td>' + producto.tipo + '</td>' +
                     '<td>' + producto.fechaVencimiento + '</td>' +
                     '<td>' + producto.fechaIngreso + '</td>' +
                     '<td><button onclick="eliminarProducto(\'' + producto.codigo + '\')">Eliminar</button></td>';
  });
}

function agregarProducto() {
  var codigo = prompt("Ingrese el código del producto:");
  var nombre = prompt("Ingrese el nombre del producto:");
  var tipo = prompt("Ingrese el tipo del producto:");
  var fechaVencimiento = prompt("Ingrese la fecha de vencimiento del producto (formato YYYY-MM-DD):");
  var fechaIngreso = prompt("Ingrese la fecha de ingreso del producto (formato YYYY-MM-DD):");
  
  inventario.push({ codigo: codigo, nombre: nombre, tipo: tipo, fechaVencimiento: fechaVencimiento, fechaIngreso: fechaIngreso });
  mostrarInventario();
}

function eliminarProducto(codigo) {
  var confirmacion = confirm("¿Estás seguro que quieres eliminar este producto?");
  if (confirmacion) {
    inventario = inventario.filter(function(producto) {
      return producto.codigo !== codigo;
    });
    mostrarInventario();
  }
}

// Ejecutar la función de mostrarInventario después de que la página esté completamente cargada
window.onload = function() {
  mostrarInventario();
};











function mostrarResenaFormulario(id) {
        var formulario = document.getElementById('resenaFormulario' + id);
        formulario.style.display = 'block';
    }

    function guardarResena(id) {
        var resena = document.getElementById('resena').value;
        // Aquí puedes implementar la lógica para guardar la reseña
        alert('Reseña guardada y Enviada : ' + resena);
        // Otras operaciones como enviar la reseña a un servidor, etc.
    }


