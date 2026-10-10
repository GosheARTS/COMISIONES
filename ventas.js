const VENTAS_BASE = 5;

function calcularComision(ventas,precio){
    let comision = 0;

    if(ventas > VENTAS_BASE){
        let ventasExtras = ventas - VENTAS_BASE;
        comision = ventasExtras * (precio * 0.1);
    }
    return comision;
}

function calcular(){
    
    // - recuperar las propiedades de las cajas de texto - //

    let cmpSueldoBase = document.getElementById("txtSueldoBase");
    let cmpVentas = document.getElementById("txtVentas");
    let cmpPrecio = document.getElementById("txtPrecio");

    // - recuperar el valor de las cajas de texto - //

    let strSueldoBase = cmpSueldoBase.value;
    let strVentas = cmpVentas.value;
    let strPrecio = cmpPrecio.value;

    // - convertir el texto en numeros - //

    let sueldoBase = parseFloat(strSueldoBase);
    let ventas = parseFloat(strVentas);
    let precio = parseFloat(strPrecio);

    let comision = calcularComision(ventas,precio);

    let total = sueldoBase + comision;

    // - recuperar las propiedades de las cajas de texto - //

    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    // - mostrar el contenido en pantalla - //
    spSueldoBase.textContent = sueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;

}