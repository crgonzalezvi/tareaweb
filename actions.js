var boton = document.getElementById("boton");
boton.style.display = "none";

var check1 = document.getElementById("check1");
var check2 = document.getElementById("check2");
var labelcheck1 = document.getElementById("labelcheck1");
var labelcheck2 = document.getElementById("labelcheck2");

check1.style.display = "none";
check2.style.display = "none";
labelcheck1.style.display = "none";
labelcheck2.style.display = "none";

function main(){
    let nombre = document.getElementById("nombre").value;
    nombre = nombre.toUpperCase();
    if (nombre.length > 0){
        alert("Su nombre es: "+ nombre);
    }
}

function apellido(){
    let apellido = document.getElementById("apellido").value;
    if (apellido.length>0){
        boton.style.display = "block";
    }
}

function radius(){
    var siSeleccion = document.getElementById("si");
    if(siSeleccion.checked ){
        check1.style.display = "block";
        check2.style.display = "block";
        labelcheck1.style.display = "block";
        labelcheck2.style.display = "block";
    }else{
        check1.style.display = "none";
        check2.style.display = "none";
        labelcheck1.style.display = "none";
        labelcheck2.style.display = "none";

    }
}