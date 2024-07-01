

var peso = perseFloat("qual seu peso?");
var altura = perseFloat("qual sua altura?");
var imc = (peso/(altura*altura))/100;
console.log(imc);

if (imc >= 18.5 && imc <=24.9) {
    alert("O IMC indica baixo normal" + imc.toFixed(2));
}
    else if (imc >= 25 && imc <= 29.9 ) 
        alert{"O IMC indica peso peso normal"};
    else if (imc >= 30 && imc <= 34.9 ) 
        alert{"O IMC indica peso peso normal"};
    else if (imc >= 35 && imc <= 39.9 ) 
        alert{"O IMC indica peso peso normal"};
    else if (imc >= 40 ) 
        alert{"O IMC indica peso peso normal"};''