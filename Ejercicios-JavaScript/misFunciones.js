/**
 * Conversión de unidades, de metros, pulgadas, pies y yardas.
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs de metros, pulgadas, pies y yardas.
 * @param {number} valor - El valor de los inputs de metros, pulgadas, pies y yardas.
 * @return
 */

function cambiarUnidades(id, valor) {
    if (isNaN(valor)) {
        alert("Se ingreso un valor invalido");
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_pulgada.value = "";
        document.lasUnidades.unid_pie.value = "";
        document.lasUnidades.unid_yarda.value = "";
    } else if (id == "metro") {
        document.lasUnidades.unid_pulgada.value = valor * 39.3701;
        document.lasUnidades.unid_pie.value = valor * 3.28084;
        document.lasUnidades.unid_yarda.value = valor * 1.09361;
    } else if (id == "pulgada") {
        document.lasUnidades.unid_metro.value = valor * 0.0254;
        document.lasUnidades.unid_pie.value = valor * 0.08333;
        document.lasUnidades.unid_yarda.value = valor * 0.027778;
    } else if (id == "pie") {
        document.lasUnidades.unid_metro.value = valor * 0.3048;
        document.lasUnidades.unid_pulgada.value = valor * 12;
        document.lasUnidades.unid_yarda.value = valor * 0.333333;
    } else if (id == "yarda") {
        document.lasUnidades.unid_metro.value = valor * 0.9144;
        document.lasUnidades.unid_pulgada.value = valor * 36;
        document.lasUnidades.unid_pie.value = valor * 3;
    }
}

function convertirGR (id) {
    var grad, rad;
    if (id == "grados") {
        grad = document.getElementById("grados").value ;
        rad = (grad*Math.PI)/180;
    } else if (id == "radianes") {
        rad = document.getElementById("radianes").value ;
        grad = (rad*180)/Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}

function mostrar_ocultar (valorMO) {
    if(valorMO== "val_mostrar"){
        document.getElementById("divMO").style.display = 'block' ;
    } else if (valorMO=="val_ocultar"){
        document.getElementById("divMO").style.display = 'none' ;
    }
}

function calcularSuma() {
    var num1, num2;

    num1=Number(document.getElementsByName("sum_num1")[0].value);
    num2=document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].value=num1+ Number(num2);
}

function calcularResta() {
    var num1, num2;

    num1=Number(document.getElementsByName("res_num1")[0].value);
    num2=Number(document.getElementsByName("res_num2")[0].value);
    document.getElementsByName("res_total")[0].value = num1 - num2;
}

function calcularProducto() {
    var num1, num2;

    num1=document.getElementsByName("mul_num1")[0].value;
    num2=document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].value= Number(num1)* Number(num2);
}

function calcularCociente() {
    var num1, num2;

    num1=Number(document.getElementsByName("div_num1")[0].value);
    num2=document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].value=num1/ Number(num2);
}