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

function formularioUsuario() {
	let nombreCompra = "";
	if (document.querySelector("#shippingAddress.first_name") !==  null) {
		nombreCompra = document.querySelector("#shippingAddress.first_name").value;
	}else {
		(document.querySelector("#shippingAddress.first_name") === null);
		let errorNombre = document.querySelector("#error-nombre");
		errorNombre.innerHTML = `<p class="errorFormEnvio">Debes completar nombre</p>`	
	}
	
	let apellidoCompra = "";
	if (document.querySelector("#shippingAddress.last_name") !== null) {
		apellidoCompra = document.querySelector("#shippingAddress.last_name").value;
	}else {
		(document.querySelector("#shippingAddress.last_name") === null);
		let errorApellido = document.querySelector("#error-apellido");
		errorApellido.innerHTML = `<p class="errorFormEnvio">Debes completar apellido</p>`	
	}

	let mailCompra =  "";
	if (document.querySelector("#contact.email")!== null) {
		mailCompra = document.querySelector("#contact.email").value;
	}else {
		(document.querySelector("#shippingAddress.email") === null);
		let errorEmail = document.querySelector("#error-email");
		errorEmail.innerHTML = `<p class="errorFormEnvio">Debes completar email</p>`	
	}


	let telefonoCompra = "";
	if (document.querySelector("#shippingAddress.phone")!== null){
		telefonoCompra = document.querySelector("#shippingAddress.phone").value;
	}else {
		(document.querySelector("#shippingAddress.phone") === null);
		let errorPhone = document.querySelector("#error-phone");
		errorPhone.innerHTML = `<p class="errorFormEnvio">Debes completar telefono</p>`	
	}

	let direccionCompra = "";
	if (document.querySelector("#shippingAddress.address")!== null) {
		direccionCompra = document.querySelector("#shippingAddress.address").value;
	}else {
		(document.querySelector("#shippingAddress.address") === null);
		let errorAddress = document.querySelector("#error-address");
		errorAddress.innerHTML = `<p class="errorFormEnvio">Debes completar dirección</p>`	
	}

	let ciudadCompra = "";
	if (document.querySelector("#shippingAddress.city")!== null) {
		ciudadCompra = document.querySelector("#shippingAddress.city").value;
	}else {
		(document.querySelector("#shippingAddress.city") === null);
		let errorCity = document.querySelector("#error-city");
		errorCity.innerHTML = `<p class="errorFormEnvio">Debes completar ciudad</p>`	
	}

	let numeroCasa = "";
	if (document.querySelector("#shippingAddress.number")!== null) {
		numeroCasa = document.querySelector("#shippingAddress.number").value;
	}else {
		(document.querySelector("#shippingAddress.number") === null);
		let errorNum = document.querySelector("#error-number");
		errorNum.innerHTML = `<p class="errorFormEnvio">Debes completar número</p>`	
	}
	let numeroTarjeta = "";
	if (document.querySelector("#payment.creditCard.cardNumber")!== null) {
		numeroTarjeta = document.querySelector("#payment.creditCard.cardNumber").value;
	}else {
		(document.querySelector("#payment.creditCard.cardNumber") === null);
		let errorCardNumber = document.querySelector("#error-number-tarjeta");
		errorCardNumber.innerHTML = `<p class="errorFormEnvio">Debes completar el número de tarjeta</p>`	
	}

	let titularTarjeta = "";
	if (document.querySelector("#payment.creditCard.cardHolderName")!== null) {
		titularTarjeta = document.querySelector("#payment.creditCard.cardHolderName").value;
	}else {
		(document.querySelector("#payment.creditCard.cardHolderName") === null);
		let errorCardName = document.querySelector("#error-titular-tarjeta");
		errorCardName.innerHTML = `<p class="errorFormEnvio">Debes completar el titular de tarjeta</p>`	
	}

	let vencimTarjeta = "";
	if (document.querySelector("#payment.creditCard.cardExpiration")!== null) {
		vencimTarjeta = document.querySelector("#payment.creditCard.cardExpiration").value;
	}else {
		(document.querySelector("#payment.creditCard.cardExpiration") === null);
		let errorCardExp = document.querySelector("#error-card-expiration");
		errorCardExp.innerHTML = `<p class="errorFormEnvio">Debes completar el vencimiento de la tarjeta</p>`	
	}


	let cvv = "";
	if (document.querySelector("#payment.creditCard.cardCvv")!== null) {
		cvv = document.querySelector("#payment.creditCard.cardCvv").value;
	}else {
		(document.querySelector("#payment.creditCard.cardCvv") === null);
		let errorCardCvv = document.querySelector("#error-card-cvv");
		errorCardCvv.innerHTML = `<p class="errorFormEnvio">Debes completar el CVV de la tarjeta</p>`	
	}

	let cuotas = "";
	if (document.querySelector("#payment.creditCard.cardInstallments")!== null) {
		cuotas =document.querySelector("#payment.creditCard.cardInstallments").value;
	}else {
		(document.querySelector("#payment.creditCard.cardInsstallments") === null);
		let errorCardIns = document.querySelector("#error-card-installments");
		errorCardIns.innerHTML = `<p class="errorFormEnvio">Debes elegir cantidad de cuotas</p>`	
	}
	let pedido = "";
	if (document.querySelector("#textarea-pedido")!== null) {
		pedido = document.querySelector("#textarea-pedido").value;
	}else {
		(document.querySelector("#textarea-pedido") === null);
		let errorPedido = document.querySelector("#error-pedido");
		errorPedido.innerHTML = `<p class="errorFormEnvio">Debes completar los detalles de tu pedido</p>`	
	}
	console.log(nombreCompra, apellidoCompra, mailCompra, telefonoCompra, direccionCompra, ciudadCompra, numeroCasa, numeroTarjeta, titularTarjeta, vencimTarjeta, cvv, cuotas, pedido);
}
