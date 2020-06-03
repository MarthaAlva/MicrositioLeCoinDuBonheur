var nombre = document.getElementById('inpNombre');
var direccion = document.getElementById('inpdireccion');
var email = document.getElementById('inpmail');
var celular = document.getElementById('inptelefono');
var comentario = document.getElementById('inpcomentario');
var error = document.getElementById('error');
var bien = document.getElementById('correcto');
error.style.color = 'red'
bien.style.color = 'green'

function enviarFormulario(){
     var mensajesError=[];
     if (nombre.value == null || nombre.value ==''){
        mensajesError.push('Ingresa nombre...!');
     }

     if (direccion.value ==null || direccion.value ==''){
         mensajesError.push('Ingresa la direccion!');
     }else if(direccion.value.length <8){
         mensajesError.push('Ingresa la direccion completa');

     }else if(tiene_numeros(direccion.value)==0){
        mensajesError.push('La direccion seleccionada no cuenta con un numero de referencia');
     }

     if(celular.value ==null || celular.value ==''){
        mensajesError.push('Ingresa un numero de celular');
     }else if(tiene_numeros(celular.value)==0){
        mensajesError.push('Ingrese sólo numeros');
     }else if(celular.value.length < 10){
        mensajesError.push('Ingrese un número valido');
     }
     if(email.value ==null || email.value ==''){
         mensajesError.push('Escribir Email');
     }else  if (validarEmail(email.value)==0){
         mensajesError.push('El email no es valido')
     }
     if(comentario.value == null || comentario.value ==''){
        mensajesError.push('Ingresa un comentario referente a tus dudas')
     }
     error.innerHTML = mensajesError.join(' , ');
     return false;
}

//Devuelve 0 si no se encuenta 1 si se encuentra
var numeros="0123456789";
function tiene_numeros(texto){
    for(i=0; i<texto.length; i++){
       if (numeros.indexOf(texto.charAt(i),0)!=-1){
          return 1;
       }
    }
    return 0;
 }

//Validar Email
function validarEmail(texto) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(texto)){
     return 1;
    } else {
     return 0;
    }
  }