const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function printTable(number) {
    for (let i = 1; i <= 10; i++) {
        let result = number * i;
        console.log(`${number} x ${i} = ${result}`);
    }
}

rl.question('Enter a number: ', (answer) => {
    const number = parseInt(answer);
    if (!isNaN(number)) {
        printTable(number);
    } else {
        console.log('Invalid input. Please enter a number.');
    }
    rl.close();
});
