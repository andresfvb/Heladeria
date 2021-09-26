var numeroVentas = 0;
var caja = [];
var ventas = [];
var ganancia = [];
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

function denominacionCinco(){
    /*for (x = 0; x < numeroVentas; x++){
        if (ventas[x] == D1){
            caja.push(ventas[x]);
        }
    }*/
    for (x = 0; x < numeroVentas; x++){
        console.log("VENTAS EN DOMINACION CINCO")
        console.log(ventas);
        let buscar = ventas.indexOf(5);
        console.log("BUSCAR EN DOMINACION CINCO")
        console.log(buscar);
            if (buscar >= 0){
            caja.push(ventas[buscar]);
            ventas.splice(buscar, 1);
            }
        console.log("VENTAS EN DOMINACION CINCO DOS")
        console.log(ventas);
        
    }
}

function denominacionDiez(){
    for (x = 0; x < numeroVentas; x++){
        console.log("VENTAS EN DOMINACION DIEZ")
        console.log(ventas);
        let buscar = ventas.indexOf(10);
        console.log("BUSCAR EN DOMINACION DIEZ")
        console.log(buscar);
            if (buscar >= 0){
                let buscar2 = caja.indexOf(5);
                if (buscar2 >= 0){
                    caja.push(ventas[buscar]);
                    ventas.splice(buscar, 1);
                    caja.splice(buscar2, 1);
                }
            }
        console.log("VENTAS EN DOMINACION DIEZ DOS")
        console.log(ventas);
    }
    
}

function denominacionVeinte(){
    for (x = 0; x < numeroVentas; x++){
        console.log("VENTAS EN DOMINACION DIEZ")
        console.log(ventas);
        let buscar = ventas.indexOf(10);
        console.log("BUSCAR EN DOMINACION DIEZ")
        console.log(buscar);
            if (buscar >= 0){
                let buscar2 = caja.indexOf(5);
                if (buscar2 >= 0){
                    caja.push(ventas[buscar]);
                    ventas.splice(buscar, 1);
                    caja.splice(buscar2, 1);
                }
            }
        console.log("VENTAS EN DOMINACION DIEZ DOS")
        console.log(ventas);
    }
}

function regresarVueltos(){
    console.log(numeroVentas);
    console.log("CLIENTES");
    console.log(ventas)
    denominacionCinco();
    console.log("LO QUE TENEMOS EN CAJA");
    console.log(caja)
    console.log("CLIENTES");
    console.log(ventas)
    denominacionDiez();
    console.log("LO QUE TENEMOS EN CAJA RONDA 2");
    console.log(caja)
    console.log("CLIENTES");
    console.log(ventas)

}