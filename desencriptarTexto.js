function desencriptar() {

    var textoIngresado = document.getElementById("input-texto").value;

    validarTexto();

    if (validacion==true){

        var textoDesencriptado = textoIngresado.replace(/enter/g, "e")
        var textoDesencriptado = textoDesencriptado.replace(/imes/g,"i");
        var textoDesencriptado = textoDesencriptado.replace(/ai/g,"a");
        var textoDesencriptado = textoDesencriptado.replace(/ober/g,"o");
        var textoDesencriptado = textoDesencriptado.replace(/ufat/g,"u");
    
        document.getElementById("msg").value = textoDesencriptado;
        document.getElementById("input-texto").value = '';
        
        var titulo = document.querySelector("h2");
        titulo.textContent="El mensaje desencriptado es :";
        
      }
}