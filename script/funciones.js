var numeroVentas = 0;
var ventas = [];
const D1 = 5;
const D2 = 10;
const D3 = 20;

function registrarVentas(){
    numeroVentas = parseInt(document.getElementById("ventas").value);
    console.log("--------NUMERO DE VENTAS----------");
    console.log(numeroVentas);
    ventas = [];
    $(document).on('click', '#registro', function() {
        $(".cliente").removeAttr("disabled");
    });
}
function ingresarVentas(){
    if (ventas.length < numeroVentas){
        let dato = parseInt(document.getElementById("cliente").value);
        ventas.push(dato);
        console.log("----------CLIENTES---------");
        console.log(ventas)
    }else{
        console.log("YA DIGITO TODOS LAS VENTAS")
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
        console.log("S");
    }else{
        console.log("N")
    }


}