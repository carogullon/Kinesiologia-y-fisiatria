const strCarrito = localStorage.getItem("carrito")
carrito = JSON.parse(strCarrito);

window.onload = function() {
	let html;
	if (carrito == null) {
		html = "No hay productos en el carrito"
	} else {
		html = generarHTMLCarrito(carrito)
		sumarCarrito();
	}

	const divCarrito = document.getElementById("carrito")
	divCarrito.innerHTML = html
}

function generarHTMLCarrito(objeto) {
	
	let html = "<table class=\"table\"><tr><td>Id</td><td>Producto</td><td>Precio</td><td>Cantidad</td><td>Subtotal</td></tr>";
				

		objeto.forEach(productosKine => {
			html += `<tr>
		                <td>${productosKine.id}</td> 
		                <td>${productosKine.nombre}</td> 
		                <td>${productosKine.precio}</td> 
		                <td>${productosKine.cantidad}</td> 
						<td>$ ${productosKine.cantidad*productosKine.precio}</td> 
					
		              </tr>`
		})
		html += `<tr><td>TOTAL</td><td></td><td></td><td></td><td id=\"total\" colspan=\"5\">$ ${sumarCarrito()}</td></tr></table>`
		
	return html

}


function sumarCarrito () {

    let total = 0;
    
    carrito.forEach(producto=> {
        let subtotal = producto.cantidad*producto.precio;
        total += subtotal;
    })
    return total
}

let btnCompra = document.getElementById("finalizarCompra");
btnCompra.addEventListener("click", respuestaClick)

function respuestaClick () {
	let formularioCompra;
	formularioCompra = formularioUsuario(datosCompra);
} 

function formularioUsuario(datosCompra) {
	let nombreCompra = document.querySelector("#shippingAddress.first_name").value
	let apellidoCompra = document.querySelector("#shippingAddress.last_name").value
	let mailCompra = document.querySelector("#contact.email").value
	let telefonoCompra = document.querySelector("#shippingAddress.phone").value
	let direccionCompra = document.querySelector("#shippingAddress.address").value
	let ciudadCompra = document.querySelector ("#shippingAddress.city").value
	let numeroTarjeta = document.querySelector("#payment.creditCard.cardNumber").value
	let titularTarjeta = document.querySelector("#payment.creditCard.cardHolderName").value
	let vencimTarjeta = document.querySelector("#payment.creditCard.cardExpiration").value
	let cvv = document.querySelector("#payment.creditCard.cardCvv").value
	let cuotas = document.querySelector("#payment.creditCard.cardInstallments").value
	let pedido = document.querySelector("#textarea-pedido").value
	
	console.log(nombreCompra,apellidoCompra, mailCompra, telefonoCompra, direccionCompra, ciudadCompra, numeroTarjeta, titularTarjeta, vencimTarjeta, cvv, cuotas, pedido);

	let error = document.querySelector("#error") 
	
	if (nombreCompra === "") {
		error.innerHTML = `<p class="errorForm">Todos los campos son obligatorios</p>`
	}
	if (apellidoCompra === "") {
		error.innerHTML = `<p class="errorForm">Todos los campos son obligatorios</p>`
	}
	if (mailCompra === "") {
		error.innerHTML = `<p class="errorForm">Todos los campos son obligatorios</p>`
	}
	if (ciudadCompra === "") {
		error.innerHTML = `<p class="errorForm">Todos los campos son obligatorios</p>`
	}
	if (numeroTarjeta === "") {
		error.innerHTML = `<p class="errorForm">Todos los campos son obligatorios</p>`
	}
	if (titularTarjeta === "") {
		error.innerHTML = `<p class="errorForm">Todos los campos son obligatorios</p>`
	}
	if (vencimTarjeta === "") {
		error.innerHTML = `<p class="errorForm">Todos los campos son obligatorios</p>`
	}
	if (cvv === "") {
		error.innerHTML = `<p class="errorForm">Todos los campos son obligatorios</p>`
	}
	if (cuotas === "") {
		error.innerHTML = `<p class="errorForm">Todos los campos son obligatorios</p>`
	}
	if (pedido === "") {
		error.innerHTML = `<p class="errorForm">Todos los campos son obligatorios</p>`
	}
}
