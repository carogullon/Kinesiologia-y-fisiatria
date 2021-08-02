function busqueda() {

	const palabra = document.getElementById("search-input").value

	if (palabra == "") {
		cargarProductos(productosKine) //mostrar todos los productos	
	} else {
	console.log(palabra)//mostrar producto selccionado
    const productosSelec = productosKine.filter(prod => prod.nombre.toUpperCase().indexOf(palabra.toUpperCase()) > -1);
	console.log(productosSelec);
	cargarProductos(productosSelec);
    }
}


const productosKine = [
    {
        id:0,
        nombre: "Theraband resistencia leve",
        precio: 800,
        stock: 8,
        descripcion: "Banda de rehabilitación de resistencia liviana recomendable para la primera etapa de la rehabilitación de lesiones de miembro superior y/o lesiones agudas",
        img: "http://d26lpennugtm8s.cloudfront.net/stores/218/558/products/3-1024x1024391-ddfed44f902a4794cd16058275638487-640-0.png",
    },
    
    {
        id:1,
        nombre: "Theraband resistencia media",
        precio: 900,
        stock: 8,
        descripcion: "Banda de rehabilitación de resistencia mediana recomendable para la primera segunda de la rehabilitación de lesiones de miembro superior y/o lesiones crónicas",
        img: "http://d2r9epyceweg5n.cloudfront.net/stores/001/050/804/products/rojo1-c70e41070d3a9faad015890330270867-640-0.jpg",
    },

    {
        id:2,
        nombre: "Theraband resistencia pesada",
        precio: 1000,
        stock: 8,
        descripcion: "Banda de rehabilitación de resistencia pesada recomendable para la última de la rehabilitación de lesiones de miembro superior y/o para entrenamiento específico de miembro superior",
        img: "https://andanzza.com.mx/uploads/productos/TheraBand/theraband-verde.jpg",
    },
    {
        id:3,
        nombre: "Pelota verde - pro series",
        precio: 7684.71,
        stock: 4,
        descripcion: "Pelota de esferodinamia para ejercicios, tamaño grande 65cm de diametro",
        img: "https://www.fitnessdigital.com.mx/images/productos/XL/17/therabandpelotaverde-1.jpg",
    },
    {
        id:4,
        nombre: "Pelota roja - pro series",
        precio: 6624.65,
        stock: 4,
        descripcion: "Pelota de esferodinamia para ejercicios, tamaño mediano 55 cm de diametro",
        img: "https://http2.mlstatic.com/D_NQ_NP_767251-MLM46336220723_062021-O.jpg",
    },
    {
        id:5,
        nombre: "Pelota amarilla-  pro series",
        precio: 4769.62,
        stock: 4,
        descripcion: "Pelota de esferodinamia para ejercicios, tamaño pequeño 45 cm de diamatro",
        img: "https://m.media-amazon.com/images/I/315rAwzuwCL.jpg",
    },
]


