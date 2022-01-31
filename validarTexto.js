function validarTexto(){

    var textoIngresado = document.getElementById("input-texto").value;  
      
        if (/[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/.test(textoIngresado)||
            (/[0-9]/.test(textoIngresado))||
            (/[A-Z]/.test(textoIngresado))){
      
              alert("No puede escribir mayúsculas ni caracteres especiales; intente de nuevo.");    
              validacion=false;
    
        }else if ((textoIngresado==" ")){
    
              alert("Escriba un mensaje para encriptar o para desencriptar : ");    
              validacion=false;
    
        }else{
      
          validacion=true;
        }
    }
    