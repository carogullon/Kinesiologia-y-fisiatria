window.onload = function () {
	cargarProductos(productosKine);	
}

function cargarProductos (productosKine) {
	const productos = document.getElementById("contenedor-productos");
    
    let html = '';


	for (let i =0; i<productosKine.length;i++) {
		html += 
        `<div class="cada-producto">
            <article class="card text-center w-20">
                <img class="card-img-top w-70" src="${productosKine[i].img}" alt="imagen-producto-kinesio">
                <div class="card-body">
                    <h5 class="card-title">${productosKine[i].nombre}<nombre/h5>
                    <h6>$${productosKine[i].precio}</h6>
                    <p class="card-text">${productosKine[i].descripcion}.</p>
                    <p class="card-text">Stock ${productosKine[i].stock}.</p>
                    <div class="row">
                	    <div class="col-3">
	                	    <button class="btn btn-primary" 
	                	    onclick="eliminarCarrito(${productosKine[i].id})">
	                	    -
	                	    </button>
	                    </div>
	                    <div class="col-6">
	                	    <input id="contador-${productosKine[i].id}" 
	                	    class="form-control" value=0>
	                    </div>
	                    <div class="col-3">
	                	    <button class="btn btn-primary" 
	                	    onclick="agregarCarrito(${productosKine[i].id})">
	                	    +
	                	    </button>
	                    </div>
	                </div>
                    <button id="${productosKine.id}" class="btn">COMPRAR</button><br>
                    </div>
                </div>
            </article>    
        </div>`
    }

    productos.innerHTML = html;

}


//Boton del carrito 

let btn = document.getElementsByClassName("btn");
for (let i = 0; btn.length > i; i++) {
  btn[i].addEventListener("click", agregarAlCarrito);
}
function clickeado(e) {
  console.log(e.target);
  e.target.style.opacity = "0.8";
  e.target.style.backgroundColor = "rgb(172, 182, 34)";
  e.target.innerHTML = "Reservado";
}
function agregarAlCarrito(e) {
  clickeado(e);
} 


//CARRITO de compras

let carrito = []

function agregarCarrito(id) {
	let contador = document.getElementById("contador-"+id)
	let cantidad = contador.value

	console.log(id)
	const item = productosKine.filter((prod) => prod.id == id);

	if (cantidad < item[0].stock) {
		cantidad++
	} else {
		alert("No hay más stock")
	}

	contador.value = cantidad;

	//agrego al carrito

	const producto = { //genero el objeto
		id: item[0].id,
		nombre: item[0].nombre,
	 	precio: item[0].precio,
	 	cantidad: cantidad
	}

	const carritoTemp = carrito.filter((prod)=> prod.id != id);
	carritoTemp.push(producto)
	carrito = carritoTemp

	console.log(carrito)

	localStorage.setItem("carrito", JSON.stringify(carrito))
	
}

function eliminarCarrito(id) {
	let contador = document.getElementById("contador-"+id)
	let cantidad = contador.value

	console.log(id)
	const item = productosObj.filter((prod) => prod.id == id);

	if (cantidad != 0) {
		cantidad--
	} else {
		alert("No puede ser menor a 0")
	}

	contador.value = cantidad;

	//agrego al carrito

	const producto = { //genero el objeto
		id: item[0].id,
		nombre: item[0].nombre,
	 	precio: item[0].precio,
	 	cantidad: cantidad
	}

	
	const carritoTemp = carrito.filter((prod)=> prod.id != id);
	carritoTemp.push(producto)
	carrito = carritoTemp

	console.log(carrito)

	
	localStorage.setItem("carrito", JSON.stringify(carrito))
}


function ordenar(tipo, objeto) {
	if(tipo === "precio") {
		objeto.sort(function() {

		})

	} else if (tipo === "nombre") {
		
	}
}





