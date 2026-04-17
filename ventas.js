const VENTAS_BASE = 5;


function calcularComisión(numeroEnVentas, PrecioProducto) {
    let comision = 0;

    if (numeroEnVentas > VENTAS_BASE) {
        let ventasExtras = numeroEnVentas - VENTAS_BASE;
        comision = ventasExtras * PrecioProducto * 0.10

    }
    
    return comision
}

function validarCampo(id){
    let valor = recuperarTexto(id).trim();
    let error = document.getElementById("error-" + id);

    error.textContent = "";

    if(valor === ""){
        error.textContent = "Este campo no puede estar vacío";
        return false;
    }

    if(!/^\d+$/.test(valor)){
        error.textContent = "Solo se permiten números";
        return false;
    }

    if(valor.length > 5){
        error.textContent = "Máximo 5 caracteres";
        return false;
    }

    return true;
}

function calcular(){

    let esValido = true;

    if(!validarCampo("txtSueldoBase")) esValido = false;
    if(!validarCampo("txtVentas")) esValido = false;
    if(!validarCampo("txtPrecio")) esValido = false;

    if(!esValido){
        return;
    }
    //recuperamos el valor de las cajas de texto
    let sueldoBaseStr = recuperarTexto("txtSueldoBase");
    let ventaStr = recuperarTexto("txtVentas");
    let precioStr = recuperarTexto("txtPrecio");
    

    //convertimos el texto a número

    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let precioProducto = recuperarFloat("txtPrecio");

    //cálculo de comosión

    let comision = calcularComisión(numeroVentas, precioProducto);

    let total = sueldoBase + comision;
    let spSueldoBase = document.getElementById("spSueldoBase");
        spSueldoBase.textContent = sueldoBase;
        spComision.textContent = comision;
        spTotal.textContent = total
}