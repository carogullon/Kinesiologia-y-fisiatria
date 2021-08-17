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





/*Esta ultima parte no la termine, mi idea es que si el usuario eligre finalizar compra aparezcla la opcion de pago
 (tarjeta, mercado pago, cuotas etc) y si elige cancelar compra se borre el carrito y vuelva a productos html */


$("#finalizarCompra").prepend(`<select class="inputsClass">
                        				<option value="SI" selected>Finalizar compra</option>
                        				<option value="NO" selected>Cancelar compra</option>
                   				</select>`);

//Asociamos el evento change a todos los inputs
$(".inputsClass").change(function (e) { 
    console.log(e.target.value);
    console.log(this.value);
});

