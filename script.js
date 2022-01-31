
var textoIngresado;
var textoEncriptado;
var textoDesencriptado;
var textoCopiado;
var validacion=false;


  function evitarRecarga(event){
  
    event.preventDefault();
    return false;
  
  }

/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/
//navigator.clipboard.readText().then(clipText => para acceder desde el portapapeles
//document.getElementById("outbox").innerText = clipText);
