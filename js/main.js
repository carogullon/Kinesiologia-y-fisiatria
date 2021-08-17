const URLJSON = "data.json";
$("#productosAjax").append('<button id="btnAjax">DESAFIO AJAX </button>');
$("#btnAjax").click (() => {
    $.getJSON (URLJSON, function(response, estado){
        if (estado === "success")  {
            for (const productAjax of response){
                $("#productosAjax").append(`div class="products"> 
                <h2> ${productosAjax.nombre}</h2>
                <h2> ${productosAjax.id}</h2>
                </div>`)
            }
            }
    }
)})