var numeroVentas = 0;
var ventas = [];
const D1 = 5;
const D2 = 10;
const D3 = 20;

function registrarVentas(){
    numeroVentas = parseInt(document.getElementById("ventas").value);
    console.log("--------NUMERO DE VENTAS----------");
    console.log(numeroVentas);
    $(document).on('click', '#registro', function() {
        $(".cliente").removeAttr("disabled");
    });
}
function ingresarVentas(){
    var elemento = document.createElement("li");
    if (ventas.length < numeroVentas){
        let dato = parseInt(document.getElementById("cliente").value);
        ventas.push(dato);
        var contenido = document.createTextNode(dato);
        elemento.appendChild(contenido);
        document.getElementById("dinero-ingresado").appendChild(elemento);
    }else{
        var dato = "Ya digito todas las ventas"
        var contenido = document.createTextNode(dato);
        elemento.appendChild(contenido);
        document.getElementById("dinero-ingresado").appendChild(elemento);
    }
    
    $(document).on('click', '#cliente', function() {
        $(".verificar").removeAttr("disabled");
    });
}
function regresarVueltos(){
    let contarD1 = 0;
    let contarD2 = 0;
    var respuesta = 0;
    for (x = 0; x < numeroVentas; x++){
        if (ventas[x] == 5){
            contarD1++;
            respuesta++
        }else if ((ventas[x] == 10) && (contarD1 != 0)){
            respuesta++;
            contarD1--;
            contarD2++
        }else if ((ventas[x] == 20) && (contarD1 != 0) && ((contarD1 > 3) || (contarD2 != 0))){
            respuesta++;
            if (contarD1 != 0 && contarD2 != 0){
                contarD1--;
                contarD2--;
            }else if(contarD1 > 3 && contarD2 == 0){
                contarD1 = contarD1 - 3;
            }
        }else{
            respuesta = 0;
        }
    }
    if (respuesta == numeroVentas){
        var dato = "S - Si puede devolver cambio";
        var elemento = document.createElement("li");
        var contenido = document.createTextNode(dato);
        elemento.appendChild(contenido);
        document.getElementById("vueltos").appendChild(elemento);
        console.log("S");
    }else{
        var dato = "N - No puede devolver cambio";
        var elemento = document.createElement("li");
        var contenido = document.createTextNode(dato);
        elemento.appendChild(contenido);
        document.getElementById("vueltos").appendChild(elemento);
    }


}