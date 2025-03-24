document.getElementById("calcular").addEventListener("click", function() {
    // OBTENER VARIABLES 
    let operador1 = document.getElementById("operador1").value;
    let operadores = document.getElementById("operadores").value;
    let operador2 = document.getElementById("operador2").value;
    let resultado = document.getElementById("resultado");
    let num1 = parseInt(operador1);
    let num2 = parseInt(operador2);
    
    // VALIDAR SI ES UN NUMERO
    if (isNaN(operador1) || isNaN(operador2)) {
        resultado.textContent = "ERROR: Ingresa números válidos.  ❌";
        return;
    }

    // REALIZAR OPERACIÓN 
    if (operadores === "+") {
        resultado.textContent = "Resultado: " + (num1 + num2) + " :)";
    } else if (operadores === "-") {
        resultado.textContent = "Resultado: " + (num1 - num2) + " :)";
    } else if (operadores === "**") {
        resultado.textContent = "Resultado: " + (num1 ** num2) + " :)";
    } else if (operadores === "%") {
        resultado.textContent = "Resultado: " + (num1 % num2) + " :)";
    } else if (operadores === "*") {
        resultado.textContent = "Resultado: " + (num1 * num2) + " :)";
    } else if (operadores === "/") {
        if (num2 === 0) {
            resultado.textContent = "ERROR: ¡No se puede dividir por cero!  ❌"; //NO DIVIDIR POR CERO
        } else {
            resultado.textContent = "Resultado: " + (num1 / num2) + " :)";
        }
    } else {
        resultado.textContent = "ERROR: Operador No Válido!  ❌"; //VALIDAR OPERADOR 
    }
});
    // FIN
    