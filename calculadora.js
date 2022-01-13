let numero1 = prompt("Digite o primeiro número:")
let numero2 = prompt("Digite o segundo número: ")
let operacao = prompt("Digite a operação que deseja: +, -, * ou /")

let resultado = operacao => {if (operação == "+") {
        return numero1 + numero2;
    }
    
    else if (operação == "-") {
        return numero1 - numero2;
    }
    
    else if (operação == "*") {
        return numero1 * numero2;
    }
    
    else {
        return numero1 / numero2;
    }
}

console.log("O resultado da operação é" + (resultado(operacao)));