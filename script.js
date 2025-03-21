document.getElementById("calcular").addEventListener("click", function() {
    // Obtener valores de los inputs usando el operador unario +
    let op1 = +document.getElementById("operador1").querySelector("input").value;
    let operador = document.getElementById("operadores").querySelector("input").value;
    let op2 = +document.getElementById("operdador2").querySelector("input").value;
    let resultado = document.getElementById("resultado");

    // Validar que los valores sean números
    if (isNaN(op1) || isNaN(op2)) {
        resultado.textContent = "ERROR: Ingresa números válidos.";
    }

    // Inicializar variable para el resultado
    let res;

    // Validar operador y realizar operación
    if (operador === "+") {
        res = op1 + op2;
    } else if (operador === "-") {
        res = op1 - op2;
    } else if (operador === "*") {
        res = op1 * op2;
    } else if (operador === "/") {
        if (op2 === 0) {
            resultado.textContent = "ERROR: ¡No se puede dividir por cero!";
        }
        res = op1 / op2;
    } else {
        resultado.textContent = "ERROR: Operador No Válido!";
    }

    // Mostrar resultado
    resultado.textContent = `Resultado: ${res}`;
});
