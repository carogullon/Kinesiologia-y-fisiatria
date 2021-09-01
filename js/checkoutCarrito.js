const strCarrito = localStorage.getItem("carrito")
carrito = JSON.parse(strCarrito);

window.onload = function () {
	let html;
	if (carrito == null) {
		html = "No hay productos en el carrito"
	} else {
		html = generarHTMLCarrito(carrito)
		sumarCarrito();
	}

	const divCarrito = document.getElementById("carritoFinal")
	if (divCarrito != null) {
		divCarrito.innerHTML = html
	}
}

function generarHTMLCarrito(objeto) {

	let html = "<table class=\"table\"><tr><td>Id</td><td>Producto</td><td>Precio</td><td>Cantidad</td><td>Subtotal</td></tr>";


	objeto.forEach(productosKine => {
		html += `<tr>
		                <td>${productosKine.id}</td> 
		                <td>${productosKine.nombre}</td> 
		                <td>${productosKine.precio}</td> 
		                <td>${productosKine.cantidad}</td> 
						<td>$ ${productosKine.cantidad * productosKine.precio}</td> 
					
		              </tr>`
	})
	html += `<tr><td>TOTAL</td><td></td><td></td><td></td><td id=\"total\" colspan=\"5\">$ ${sumarCarrito()}</td></tr></table>`

	return html

}


function sumarCarrito() {

	let total = 0;

	carrito.forEach(producto => {
		let subtotal = producto.cantidad * producto.precio;
		total += subtotal;
	})
	return total
}


let botonPedido = $("#btn-realizarPedido");
if (botonPedido !== null) {
	botonPedido.click(respuestaClick);
}

function respuestaClick() {
	formularioUsuario();
}

const formulario = document.getElementById('formularioCompra');
const inputs = document.querySelectorAll('#formularioCompra input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	ciudad: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	direccion: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	numero:  /^\d{7,14}$/, // 7 a 14 numeros.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^[0-9]+$/,
	tarjeta: /^[0-9]{15,16}|(([0-9]{4}\s){3}[0-9]{3,4})$/,// 16 digitos o de 4 en 4 separados por espacios.
}

const campos = {
	nombre: false,
	ciudad: false,
	direccion: false,
	email: false,
	numero: false,
	telefono: false,
	tarjeta: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "email":
			validarCampo(expresiones.email, e.target, 'email');
		break;
		case "ciudad":
			validarCampo(expresiones.ciudad, e.target, 'ciudad');
		break;
		case "numero":
			validarCampo(expresiones.numero, e.target, 'numero');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
		case "direccion":
			validarCampo(expresiones.direccion, e.target, 'direccion');
		break;
		case "tarjeta":
			validarCampo(expresiones.tarjeta, e.target, 'tarjeta');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	
	if(campos.nombre && campos.email && campos.ciudad && campos.direccion && campos.telefono && campos.numero &&campos.tarjeta && terminos.checked ){
		
		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		console.log (nombre, email, direccion, ciudad, telefono, numero, tarjeta);
		
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});

	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});
