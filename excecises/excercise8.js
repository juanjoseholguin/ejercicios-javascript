/*
Escribe una función llamada calcularIMC(peso, altura) que reciba el peso (en kg) y la altura (en metros) de una persona, 
y retorne su índice de masa corporal (IMC), con base en la fórmula:
IMC = peso / altura^2.

Además, debe clasificar el IMC:

"Bajo peso" si es menor de 18.5,
"Normal" si está entre 18.5 y 24.9,
"Sobrepeso" si está entre 25 y 29.9,
"Obesidad" si es 30 o más.
*/
function calcularIMC(peso, altura) {
    var IMC  = peso / (altura * altura);
    if (IMC < 18.5) {
    return  "Bajo peso";
    }
    else if (IMC>=18.5 && IMC<=24.9) {
        return  "Normal";
        }
    else if (IMC>=25 && IMC<=29.9) {
        return  "Sobrepeso";
        }
    else if (IMC>=30) {
        return  "Obesidad";
        }
}

console.log("-----------------------------------")
console.log("EJERCICIO 8")
console.log("-----------------------------------")
console.log(calcularIMC(60, 1.7)); // "Normal"
console.log(calcularIMC(80, 1.7)); // "Sobrepeso"