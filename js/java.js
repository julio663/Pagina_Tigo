const btMenu = document.querySelector("#btMenu");
const menu = document.querySelector("#menu");
 btMenu.addEventListener("click", function(){
     menu.classList.toggle("mostrar");
 }) ;


 var Nombre = document.getElementById("nombre");

Nombre.addEventListener("focus",function() {
    document.getElementById("ayudaNombre").textContent = "Ingresa tu Nombre y Apellido";
});
Nombre.addEventListener("blur",function() {
    document.getElementById("ayudaNombre").textContent = "";
});

var CorreoElectronico = document.getElementById("correo");

CorreoElectronico.addEventListener("focus",function() {
    document.getElementById("ayudaCorreo").textContent = "Ingresa tu Correo Electronico";
});CorreoElectronico.addEventListener("blur",function() {
    document.getElementById("ayudaCorreo").textContent = "";

});


var Asuntoscontacto = document.getElementById("asuntos");

Asuntoscontacto .addEventListener("focus",function() {
    document.getElementById("ayudaAsuntos").textContent = "Ingresa tu asunto por favor";
});
Asuntoscontacto .addEventListener("blur",function() {
    document.getElementById("ayudaAsuntos").textContent = "";

});

var mensajecontactos=document.getElementById("mensaje");

mensajecontactos.addEventListener("focus",function(){
    document.getElementById("ayudamensaje").textContent="Ingresa tu mensaje";
})

mensajecontactos.addEventListener("blur",function(){
    document.getElementById("ayudamensaje").textContent="";
})


document.getElementById("nombre").addEventListener("change",function(evento){
    console.log("Nombre y apellido introducido : "+evento.target.value);
});
document.getElementById("correo").addEventListener("change",function(evento){
    console.log("Correo intoducido : " + evento.target.value);
});
document.getElementById("asuntos").addEventListener("change",function(evento){
    console.log("Asunto ingresado : " + evento.target.value);
});

document.getElementById("pais").addEventListener("change",function(evento){
    console.log("Pais Ingresdo : " + evento.target.value);
});
document.getElementById("mensaje").addEventListener("change",function(evento){
    console.log("Mensaje ingresado : " +evento.target.value);
});