*// Caculador de IMC

var peso = prompt("qual seu peso?")
var altura = prompt("qual sua altura?")
var imc = (peso/(altura*altura))/100
console.log(imc)

if (imc => 18.5)