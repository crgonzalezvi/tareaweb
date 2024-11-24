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
    if (document.getElementById("si").checked){
        check1.style.display = "block";
        check2.style.display = "block";
        labelcheck1.style.display = "block";
        labelcheck2.style.display = "block";
        
    }else if(document.getElementById("no").checked){
        check1.style.display = "none";
        check2.style.display = "none";
        labelcheck1.style.display = "none";
        labelcheck2.style.display = "none";
    }
}

function email(){
    let email = document.getElementById("email").value;
    if(!email.includes("@")){
        alert("Revise el formato del correo")
    }
}

function pass(){

    let pass1Elemento = document.getElementById("pass1"); //Elemento
    let pass2Elemento = document.getElementById("pass2"); //Elemento

    let pass1 = document.getElementById("pass1").value; //valor
    let pass2 = document.getElementById("pass2").value; //valor
    if(pass1 == pass2){
        pass1Elemento.style.border = "2px solid green";
        pass2Elemento.style.border = "2px solid green";
    }else{
        pass1Elemento.style.border = "2px solid red";
        pass2Elemento.style.border = "2px solid red";
    }
}

