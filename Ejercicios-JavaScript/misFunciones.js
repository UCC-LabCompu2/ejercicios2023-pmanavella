/**
 * Conversión de unidades, de metros, pulgadas, pies y yardas.
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs de metros, pulgadas, pies y yardas.
 * @param {number} valor - El valor de los inputs de metros, pulgadas, pies y yardas.
 * @return
 */

function cambiarUnidades(id, valor) {
    var metro, pulgada, pie, yarda;

    if(valor.includes(",")) {
        valor = valor.replace(",",".");
    }

    if (isNaN(valor)) {
        alert("Se ingreso un valor invalido " + id );
        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";
    } else if (id == "metro") {
        metro = valor;
        pulgada = valor * 39.3701;
        pie = valor * 3.28084;
        yarda = valor * 1.09361;
    } else if (id == "pulgada") {
        pulgada = valor;
        metro = valor * 0.0254;
        pie = valor * 0.08333;
        yarda = valor * 0.027778;
    } else if (id == "pie") {
        pie = valor;
        metro = valor * 0.3048;
        pulgada = valor * 12;
        yarda = valor * 0.333333;
    } else if (id == "yarda") {
        yarda = valor;
        metro = valor * 0.9144;
        pulgada = valor * 36;
        pie = valor * 3;
    }

    document.lasUnidades.unid_metro.value = Math.round(metro*100)/100;
    document.lasUnidades.unid_pulgada.value = Math.round(pulgada*100)/100;
    document.lasUnidades.unid_pie.value = Math.round(pie*100)/100;
    document.lasUnidades.unid_yarda.value = Math.round(yarda*100)/100;
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
    document.getElementsByName("sum_total")[0].innerHTML=num1+ Number(num2);
}

function calcularResta() {
    var num1, num2;

    num1=Number(document.getElementsByName("res_num1")[0].value);
    num2=Number(document.getElementsByName("res_num2")[0].value);
    document.getElementsByName("res_total")[0].innerHTML = num1 - num2;
}

function calcularProducto() {
    var num1, num2;

    num1=document.getElementsByName("mul_num1")[0].value;
    num2=document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].innerHTML= Number(num1)*Number(num2);
}

function calcularCociente() {
    var num1, num2;

    num1=Number(document.getElementsByName("div_num1")[0].value);
    num2=document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].innerHTML=num1/Number(num2);
}

function cargarWeb() {
    var cant, unidad, urlComp ;

    cant = document.getElementById("distancia").value ;
    unidad = document.getElementsByName("unidades")[0].value;

    urlComp = "segundaWeb.html#" + cant + "#" + unidad ;
    window.open(urlComp) ;
}

function cargarResultado() {
    var urlComp, can, un;

    urlComp = window.location.href.split("/")[5];

    can = urlComp.split("#")[1];
    un = urlComp.split("#")[2];

    document.getElementById("dist").value = can + " " + un;
}