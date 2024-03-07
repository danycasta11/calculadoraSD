function sumar() {
    var num1 = parseInt(document.getElementById("numero1").value.replace(/[\s,.]/g, ''));
    var num2 = parseInt(document.getElementById("numero2").value.replace(/[\s,.]/g, ''));
    
    var resultado = num1 + num2;
    var resultadoFormateado = resultado.toLocaleString();
    
    var modal = document.getElementById("myModal");
    var modalResultado = document.getElementById("resultado");
    
    modal.style.display = "block";
    modalResultado.textContent = "RESULTADO : " + resultadoFormateado ;
}

function cerrarModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

