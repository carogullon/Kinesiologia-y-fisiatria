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
						<td>${productosKine.cantidad*productosKine.precio}</td> 
		              </tr>`
		})
		html += "<tr><td id=\"total\" colspan=\"5\"></td></tr></table>"
	return html

}

function sumarCarrito () {

	let total = 0;
	
	carrito.forEach(producto=> {
		let subtotal = producto.cantidad*producto.precio;
		total += subtotal;
	})
	$("#total").html(total);
}

$("#finalizarCompra").prepend(`<select class="inputsClass">
                        				<option value="SI" selected>Finalizar compra</option>
                        				<option value="NO" selected>Agregar más productos al carrito</option>
                   				</select>`);

//Asociamos el evento change a todos los inputs
$(".inputsClass").change(function (e) { 
    console.log(e.target.value);
    console.log(this.value);
});



