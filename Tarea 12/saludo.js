var nombre=prompt("ingrese su nombre");
if(nombre!=""){
    saludo(nombre);
}else{
    alert("Por favor ingrese un nombre")
}

function saludo(){
    alert("Bienvenido " + nombre);
    } 
    saludo();
