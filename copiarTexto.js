function copiar() {

    var textoCopiado = document.getElementById("msg");
    textoCopiado.select();
    navigator.clipboard.writeText(textoCopiado.value);
  
    var titulo = document.querySelector("h2");
    titulo.textContent="Mensaje Copiado:";
    
  }