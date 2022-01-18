const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Digite uma operação: ", (math) => {
    try {
        const regex = new RegExp("(\\/0)+");

        if (regex.test(math)) {
            throw "Não é possível fazer divisão por zero!";
        }

        const result = eval(math);
        console.info("Resultado da sua operação: ", result);
    } catch (error) {
        console.error(error);
    }

    rl.close();
});