function encriptar(){

    var textoIngresado = document.getElementById("input-texto").value;
  
    validarTexto();
  
      if (validacion==true){
  
        var textoEncriptado = textoIngresado.replace(/e/g,"enter");
        var textoEncriptado = textoEncriptado.replace(/i/g,"imes");
        var textoEncriptado = textoEncriptado.replace(/a/g,"ai");
        var textoEncriptado = textoEncriptado.replace(/o/g,"ober");
        var textoEncriptado = textoEncriptado.replace(/u/g,"ufat");
  
        document.getElementById("msg").value = textoEncriptado;
        document.getElementById("input-texto").value = '';
  
        var titulo = document.querySelector("h2");
        titulo.textContent="El mensaje encriptado es :";
  
      }
  }