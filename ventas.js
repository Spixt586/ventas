const VENTAS_BASE = 5;


function calcularComisión(numeroEnVentas, PrecioProducto) {
    let comision = 0;

    if (numeroEnVentas > VENTAS_BASE) {
        let ventasExtras = numeroEnVentas - VENTAS_BASE;
        comision = ventasExtras * PrecioProducto * 0.10

    }
    
    return comision
}

function calcular(){
    //recuperamos propiedades de cajas de texto
    let componenteSueldoBase = document.getElementById("txtSueldoBase");
    let componenteVenta = document.getElementById("txtVentas");
    let componentePrecio = document.getElementById("txtPrecio");

    //recuperamos el valor de las cajas de texto

    let sueldoBaseStr = componenteSueldoBase.value;
    let ventaStr = componenteVenta.value;
    let precioStr = componentePrecio.value;
    

    //convertimos el texto a número

    let sueldoBase = parseFloat(sueldoBaseStr);
    let numeroVentas = parseFloat(ventaStr);
    let precioProducto = parseFloat(precioStr);

    //cálculo de comosión

    let comision = calcularComisión(numeroVentas, precioProducto);

    let total = sueldoBase + comision;
    let spSueldoBase = document.getElementById("spSueldoBase");
        spSueldoBase.textContent = sueldoBase;
        spComision.textContent = comision;
        spTotal.textContent = total
}