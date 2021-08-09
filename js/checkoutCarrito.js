$("#finalizarCompra").prepend(`<select class="inputsClass">
                        				<option value="SI" selected>Finalizar compra</option>
                        				<option value="NO" selected>Agregar más productos al carrito</option>
                   				</select>`);

//Asociamos el evento change a todos los inputs
$(".inputsClass").change(function (e) { 
    console.log(e.target.value);
    console.log(this.value);
});


window.onload = function() {
	const strCarrito = localStorage.getItem("carrito")
	const carrito = JSON.parse(strCarrito);

	let html;
	if (carrito == null) {
		html = "No hay productos en el carrito"
	} else {
		html = generarHTMLCarrito(carrito)
	}

	const divCarrito = document.getElementById("carrito")
	divCarrito.innerHTML = html
}

function generarHTMLCarrito(objeto) {
	
	let html = "<table class='table'><tr><td>Id</td><td>Producto</td><td>Precio</td><td>Cantidad</td></tr>";

		objeto.forEach(productosKine => {
			html += `<tr>
		                <td>${productosKine.id}</td> 
		                <td>${productosKine.nombre}</td> 
		                <td>${productosKine.precio}</td> 
		                <td>${productosKine.cantidad}</td> 
		              </tr>`
		})

		html += "</table>"
	

	return html
}

let sumaProductos = 0;

function sumar(subtotal1, subtotal2) {
    sumaProductos = subtotal1 + subtotal2;
}

function mostrar(mensaje) {
    console.log(mensaje);
}

sumar(6, 3);            
mostrar(sumaProductos); 

