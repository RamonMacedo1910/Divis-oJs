alert('Dividindo em JavaScript.');

let numerador = prompt('Digite um numerador:');
let denominador = prompt('Digite um denominador:');

let resultado = numerador / denominador;


if (denominador == 0){
        alert(`Não é possível dividir por 0.`);
}

else{
    alert(`${numerador} dividido por ${denominador} é ${resultado}.`);
}   