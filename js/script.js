function colocarN(value) {
    document.getElementById('resultado').innerHTML = value;
}
function obtenerN() {
    return(document.getElementById('resultado').innerHTML);
}
function boton(key) { 
    var result = obtenerN();
    if (result!='0' || isNaN(key)) colocarN(result + key);
    else colocarN(key);
}
function calcular() {
    var result = eval(obtenerN()); 
    colocarN(result);
}
function del() { 
    colocarN(0);
}
